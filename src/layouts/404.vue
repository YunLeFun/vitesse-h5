<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <main class="not-found-layout">
    <div class="not-found-icon">
      <div i-carbon-warning />
    </div>
    <RouterView />
    <div class="not-found-actions">
      <button btn @click="router.back()">
        {{ t('button.back') }}
      </button>
    </div>
  </main>
</template>

<style scoped>
.not-found-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  padding: 40px 16px;
  text-align: center;
  color: var(--h5-c-text);
}

.not-found-icon {
  font-size: 3rem;
  color: var(--h5-c-secondary-text);
  margin-bottom: 16px;
}

.not-found-actions {
  width: 100%;
  max-width: 400px;
  margin-top: 32px;
}
</style>
