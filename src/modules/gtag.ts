import VueGtag from 'vue-gtag-next'
import config from '~/config'
import { type UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.use(VueGtag, {
    config: { id: config.gtag.id },
  })
}
