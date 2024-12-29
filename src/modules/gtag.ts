import type { UserModule } from '~/types'
import VueGtag from 'vue-gtag-next'
import config from '~/config'

export const install: UserModule = ({ app }) => {
  app.use(VueGtag, {
    property: { id: config.gtag.id },
  })
}
