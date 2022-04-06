import { IFormItem } from '@/base-ui/form'
export const searchFormItems: IFormItem[] = [
  {
    type: 'input',
    label: '用户名',
    placeholder: '请输入用户名'
  },
  {
    type: 'password',
    label: '密码',
    placeholder: '请输入密码'
  },
  {
    type: 'select',
    label: '喜欢的运动',
    placeholder: '请输入兴趣爱好',
    options: [{ label: '羽毛球' }, { label: '跑步' }]
  },
  {
    type: 'datepicker',
    label: '创建日期'
  }
]
