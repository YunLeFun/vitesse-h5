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
  <div class="home-page">
    <div class="home-hero">
      <div class="home-icon-wrapper">
        <div class="home-icon">
          <div i-carbon-application-mobile />
        </div>
      </div>
      <h1 class="home-title">
        Vitesse H5
      </h1>
      <p class="home-desc">
        {{ t('intro.desc') }}
      </p>
    </div>

    <Suspense>
      <div class="home-form">
        <input
          id="input"
          v-model="name"
          :placeholder="t('intro.whats-your-name')"
          :aria-label="t('intro.whats-your-name')"
          type="text"
          autocomplete="false"
          class="home-input"
          @keydown.enter="go"
        >
        <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>

        <button
          btn
          :disabled="!name"
          @click="go"
        >
          {{ t('button.go') }}
        </button>
      </div>

      <template #fallback>
        <Loading />
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 48px;
}

.home-hero {
  text-align: center;
  margin-bottom: 40px;
}

.home-icon-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}

.home-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  font-size: 1.75rem;
  color: #fff;
  background: linear-gradient(135deg, #007aff, #5856d6);
  border-radius: 14px;
  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);
}

.home-title {
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 8px;
}

.home-desc {
  font-size: 0.9375rem;
  color: var(--h5-c-secondary-text);
  margin: 0;
}

.home-form {
  width: 100%;
  max-width: 400px;
}

.home-input {
  display: block;
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 16px;
  font-size: 1rem;
  line-height: 1.25;
  color: var(--h5-c-text);
  background: var(--h5-c-input-bg);
  border: none;
  border-radius: 10px;
  text-align: center;
  box-sizing: border-box;
}

.home-input::placeholder {
  color: var(--h5-c-secondary-text);
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
