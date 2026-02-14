<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="not-found-content">
    <h1 class="not-found-title">
      404
    </h1>
    <p class="not-found-text">
      {{ t('not-found') }}
    </p>
  </div>
</template>

<style scoped>
.not-found-content {
  text-align: center;
}

.not-found-title {
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 8px;
  color: var(--h5-c-text);
}

.not-found-text {
  font-size: 0.9375rem;
  color: var(--h5-c-secondary-text);
  margin: 0;
}
</style>

<route lang="yaml">
meta:
  layout: 404
</route>
