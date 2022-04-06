import { createStore } from 'vuex'

//导入login的模块
import loginState from '../login/login'
import type { IRootState } from './type'

const store = createStore<IRootState>({
  state: () => {
    return {
      token: '',
      userIfo: {}
    }
  },
  mutations: {},
  modules: {
    loginState
  }
})
export function setupRouter() {
  store.dispatch('loginState/actionLocal')
}
export default store
