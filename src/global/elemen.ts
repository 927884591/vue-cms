import { App } from 'vue'
import 'element-plus/dist/index.css'
import { User, Iphone } from '@element-plus/icons-vue'
import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElRadio,
  ElTabPane,
  ElTabs,
  ElCalendar,
  ElIcon
} from 'element-plus'
const components = [
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElRadio,
  ElTabPane,
  ElTabs,
  ElCalendar,
  ElIcon,
  //图标组件
  User,
  Iphone
]
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
