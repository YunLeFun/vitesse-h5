<script setup lang="ts">
import { useGtag } from 'vue-gtag-next'

const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()

const { event } = useGtag()

function go() {
  if (name.value) {
    router.push(`/hi/${encodeURIComponent(name.value)}`)

    event('click_go', {
      event_label: name.value,
      event_category: 'custom_click',
    })
  }
  else {
    event('click_go', {
      event_label: 'null',
      event_category: 'custom_click',
    })
  }
}

const { t } = useI18n()
</script>

<template>
  <div pt-4>
    <div text-4xl>
      <div i-carbon-application-mobile inline-block />
    </div>
    <p m-2>
      <a rel="noreferrer" href="https://github.com/YunLeFun/vitesse-h5" target="_blank">
        Vitesse H5
      </a>
    </p>
    <p>
      <em text-sm opacity-75>{{ t('intro.desc') }}</em>
    </p>

    <div py-4 />

    <Suspense>
      <div m="auto" max-w="800px">
        <input
          id="input"
          v-model="name"
          :placeholder="t('intro.whats-your-name')"
          :aria-label="t('intro.whats-your-name')"
          type="text"
          autocomplete="false"
          p="x4 y2"
          w="full"
          text="center"
          bg="transparent"
          border="~ rounded gray-200 dark:gray-700"
          @keydown.enter="go"
        >
        <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>

        <div>
          <button
            btn mt-4
            :disabled="!name"
            @click="go"
          >
            {{ t('button.go') }}
          </button>
        </div>
      </div>

      <template #fallback>
        <Loading />
      </template>
    </Suspense>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
