<script setup lang="ts">
import config from '~/config'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: config.title,
  meta: [
    { name: 'description', content: config.description },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? config.mainColor : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
