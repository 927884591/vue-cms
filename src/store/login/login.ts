import { Module } from 'vuex'

//导入logintype
import { ILoginStateType } from './type'
import { IRootState } from '../main/type'

const loginState: Module<ILoginStateType, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userIfo: {}
    }
  },
  mutations: {},
  actions: {
    actionLoginAccount({ commit }, payload) {
      console.log(1111, payload, commit)
    }
  }
}

export default loginState
