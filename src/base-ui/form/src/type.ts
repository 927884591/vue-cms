type formType = 'input' | 'select' | 'datepicker' | 'password'
export interface IFormItem {
  type: formType
  label: string
  rule?: any[]
  placeholder?: string
  options?: any[]
  otherOption?: any[]
}
