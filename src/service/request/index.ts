import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance } from 'axios'
class YRequest {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
  }
  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default YRequest
