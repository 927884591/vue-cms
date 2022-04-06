import { App } from 'vue'
import 'element-plus/dist/index.css'
import {
  User,
  Iphone,
  ArrowLeftBold,
  ArrowRightBold,
  Setting,
  Monitor,
  Goods,
  ChatLineRound,
  ArrowDown
} from '@element-plus/icons-vue'
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
  ElIcon,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElMenuItemGroup,
  ElAvatar,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker
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
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElMenuItemGroup,
  //头像组件
  ElAvatar,
  //下拉菜单组件
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  //图标组件
  User,
  Iphone,
  ArrowLeftBold,
  ArrowRightBold,
  ArrowDown,
  Setting,
  Monitor,
  Goods,
  ChatLineRound
]
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
