import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'border-none px-4 py-3 w-full rounded-12px inline-block bg-[var(--h5-c-primary)] text-white cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 text-base font-semibold tracking-wide active:opacity-80 transition-opacity'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    // for mobile minimal size, do not need web fonts
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: [
    ...('prose prose-sm m-auto text-left'.split(' ')),
    'i-ri-home-2-fill',
    'i-ri-information-fill',
    'i-ri-settings-3-line',
    'i-ri-settings-3-fill',
    'i-ri-sun-line',
    'i-ri-moon-line',
  ],
})
