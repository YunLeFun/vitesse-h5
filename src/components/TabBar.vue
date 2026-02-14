<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()

const tabs = [
  { path: '/', icon: 'i-ri-home-2-line', activeIcon: 'i-ri-home-2-fill', label: () => t('button.home') },
  { path: '/about', icon: 'i-ri-information-line', activeIcon: 'i-ri-information-fill', label: () => t('button.about') },
  { path: '/settings', icon: 'i-ri-settings-3-line', activeIcon: 'i-ri-settings-3-fill', label: () => t('button.settings') },
]

function isActive(path: string) {
  return route.path === path
}
</script>

<template>
  <nav class="tab-bar">
    <RouterLink
      v-for="tab in tabs"
      :key="tab.path"
      :to="tab.path"
      class="tab-bar-item"
      :class="{ active: isActive(tab.path) }"
      :title="tab.label()"
    >
      <div class="tab-bar-icon" :class="isActive(tab.path) ? tab.activeIcon : tab.icon" />
      <span class="tab-bar-label">{{ tab.label() }}</span>
    </RouterLink>
  </nav>
</template>

<style scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: env(safe-area-inset-bottom, 0);
  background: var(--h5-c-tab-bar-bg);
  border-top: 0.5px solid var(--h5-c-tab-bar-border);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
}

.tab-bar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 64px;
  min-height: 44px;
  padding: 6px 12px;
  color: var(--h5-c-tab-bar-inactive);
  text-decoration: none;
  transition: color 0.2s;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}

.tab-bar-item:active {
  transform: scale(0.92);
}

.tab-bar-item.active {
  color: var(--h5-c-primary);
}

.tab-bar-icon {
  font-size: 1.25rem;
  margin-bottom: 2px;
}

.tab-bar-label {
  font-size: 0.625rem;
  line-height: 1;
}
</style>
