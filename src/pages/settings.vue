<script setup lang="ts">
import { isDark, toggleDark } from '~/composables/dark'

const { t, availableLocales, locale } = useI18n()

function toggleLocales() {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}

const localeName = computed(() => {
  const names: Record<string, string> = {
    'en': 'English',
    'zh-CN': '简体中文',
  }
  return names[locale.value] || locale.value
})
</script>

<template>
  <div class="settings-page">
    <h1 class="settings-title">
      {{ t('button.settings') }}
    </h1>

    <div class="settings-group">
      <div class="settings-group-header">
        {{ t('settings.general') }}
      </div>
      <div class="settings-group-card">
        <button class="settings-cell" @click="toggleDark()">
          <span class="settings-cell-icon" style="background: #ff9f0a;">
            <div :class="isDark ? 'i-ri-moon-line' : 'i-ri-sun-line'" />
          </span>
          <span class="settings-cell-body">
            <span class="settings-cell-label">{{ t('button.toggle_dark') }}</span>
            <span class="settings-cell-trailing">
              <span class="settings-cell-value">{{ isDark ? t('settings.dark') : t('settings.light') }}</span>
              <span class="settings-cell-chevron i-ri-arrow-right-s-line" />
            </span>
          </span>
        </button>

        <button class="settings-cell" @click="toggleLocales()">
          <span class="settings-cell-icon" style="background: #30d158;">
            <div i-ri-translate />
          </span>
          <span class="settings-cell-body">
            <span class="settings-cell-label">{{ t('button.toggle_langs') }}</span>
            <span class="settings-cell-trailing">
              <span class="settings-cell-value">{{ localeName }}</span>
              <span class="settings-cell-chevron i-ri-arrow-right-s-line" />
            </span>
          </span>
        </button>
      </div>
    </div>

    <div class="settings-group">
      <div class="settings-group-header">
        {{ t('settings.about') }}
      </div>
      <div class="settings-group-card">
        <a
          class="settings-cell"
          rel="noreferrer"
          href="https://github.com/YunLeFun/vitesse-h5"
          target="_blank"
        >
          <span class="settings-cell-icon" style="background: #636366;">
            <div i-ri-github-line />
          </span>
          <span class="settings-cell-body">
            <span class="settings-cell-label">GitHub</span>
            <span class="settings-cell-trailing">
              <span class="settings-cell-chevron i-ri-external-link-line" />
            </span>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.settings-page {
  text-align: left;
  margin: 0 -16px;
  padding: 0 16px;
}

.settings-title {
  font-size: 2.125rem;
  font-weight: 700;
  margin: 8px 0 24px;
  letter-spacing: -0.02em;
}

.settings-group {
  margin-bottom: 28px;
}

.settings-group-header {
  font-size: 0.8125rem;
  color: var(--h5-c-menu-secondary);
  text-transform: uppercase;
  padding: 0 16px 8px;
  letter-spacing: 0.02em;
}

.settings-group-card {
  background: var(--h5-c-menu-bg);
  border-radius: 10px;
  overflow: hidden;
}

.settings-cell {
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

.settings-cell:active {
  background-color: var(--h5-c-menu-active);
}

.settings-cell + .settings-cell {
  position: relative;
}

.settings-cell + .settings-cell::before {
  content: '';
  position: absolute;
  top: 0;
  left: 56px;
  right: 0;
  height: 0.5px;
  background: var(--h5-c-menu-separator);
}

.settings-cell-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  margin-right: 12px;
  font-size: 1.1rem;
  color: #fff;
  flex-shrink: 0;
}

.settings-cell-body {
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
}

.settings-cell-label {
  flex: 1;
  min-width: 0;
}

.settings-cell-trailing {
  display: flex;
  align-items: center;
  gap: 2px;
  flex-shrink: 0;
}

.settings-cell-value {
  color: var(--h5-c-menu-secondary);
  font-size: 0.9375rem;
}

.settings-cell-chevron {
  color: var(--h5-c-menu-secondary);
  font-size: 1.1rem;
  opacity: 0.4;
}
</style>

<route lang="yaml">
meta:
  layout: default
</route>
