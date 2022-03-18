import { App } from 'vue'
import elemen from './elemen'

export default function globalEl(app: App): void {
  app.use(elemen)
}
