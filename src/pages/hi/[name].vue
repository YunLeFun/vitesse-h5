<script setup lang="ts">
const router = useRouter()
const route = useRoute('/hi/[name]')
const user = useUserStore()
const { t } = useI18n()

watchEffect(() => {
  const name = route.params.name
  user.setNewName(Array.isArray(name) ? name[0] : name)
})
</script>

<template>
  <div class="hi-page">
    <div class="hi-hero">
      <div class="hi-icon-wrapper">
        <div class="hi-icon">
          <div i-carbon-pedestrian />
        </div>
      </div>
      <h1 class="hi-title">
        {{ t('intro.hi', { name: user.savedName }) }}
      </h1>
      <p class="hi-desc">
        {{ t('intro.dynamic-route') }}
      </p>
    </div>

    <template v-if="user.otherNames.length">
      <div class="hi-aliases">
        <div class="hi-aliases-header">
          {{ t('intro.aka') }}
        </div>
        <div class="hi-aliases-card">
          <RouterLink
            v-for="otherName in user.otherNames"
            :key="otherName"
            :to="`/hi/${otherName}`"
            class="hi-alias-cell"
            replace
          >
            <span class="hi-alias-name">{{ otherName }}</span>
            <span class="hi-alias-chevron i-ri-arrow-right-s-line" />
          </RouterLink>
        </div>
      </div>
    </template>

    <div class="hi-actions">
      <button
        btn
        @click="router.back()"
      >
        {{ t('button.back') }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.hi-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 48px;
}

.hi-hero {
  text-align: center;
  margin-bottom: 40px;
}

.hi-icon-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}

.hi-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  font-size: 1.75rem;
  color: #fff;
  background: linear-gradient(135deg, #34c759, #30d158);
  border-radius: 14px;
  box-shadow: 0 4px 12px rgba(52, 199, 89, 0.3);
}

.hi-title {
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 8px;
}

.hi-desc {
  font-size: 0.9375rem;
  color: var(--h5-c-secondary-text);
  margin: 0;
}

.hi-aliases {
  text-align: left;
  width: 100%;
  margin-bottom: 28px;
}

.hi-aliases-header {
  font-size: 0.8125rem;
  color: var(--h5-c-menu-secondary);
  text-transform: uppercase;
  padding: 0 16px 8px;
  letter-spacing: 0.02em;
}

.hi-aliases-card {
  background: var(--h5-c-menu-bg);
  border-radius: 10px;
  overflow: hidden;
}

.hi-alias-cell {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 44px;
  padding: 8px 16px;
  background: transparent;
  border: none;
  color: var(--h5-c-text);
  text-decoration: none;
  text-align: left;
  font-size: 0.9375rem;
  line-height: 1.25;
  cursor: pointer;
  transition: background-color 0.15s;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}

.hi-alias-cell:active {
  background-color: var(--h5-c-menu-active);
}

.hi-alias-cell + .hi-alias-cell {
  position: relative;
}

.hi-alias-cell + .hi-alias-cell::before {
  content: '';
  position: absolute;
  top: 0;
  left: 16px;
  right: 0;
  height: 0.5px;
  background: var(--h5-c-menu-separator);
}

.hi-alias-name {
  flex: 1;
  min-width: 0;
  color: var(--h5-c-primary);
}

.hi-alias-chevron {
  color: var(--h5-c-menu-secondary);
  font-size: 1.1rem;
  opacity: 0.4;
  flex-shrink: 0;
}

.hi-actions {
  width: 100%;
  max-width: 400px;
}
</style>
