import YRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
const yRequest = new YRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})
console.log(yRequest.request)

export default yRequest
