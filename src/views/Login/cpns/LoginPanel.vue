<template>
  <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentCpn">
    <el-tab-pane name="account">
      <template #label>
        <span class="custom-tabs-label">
          <el-icon :size="20"><user /></el-icon>
          <span>用户登录</span>
        </span>
      </template>
      <login-account ref="accountRef"></login-account>
    </el-tab-pane>
    <el-tab-pane name="phone">
      <template #label>
        <span class="custom-tabs-label">
          <el-icon><iphone /></el-icon>
          <span>手机登录</span>
        </span>
      </template>
      <login-phone ref="phoneRef"></login-phone>
    </el-tab-pane>
  </el-tabs>
  <div class="keeppsd">
    <el-checkbox type="primary" v-model="isRePassword">记住密码</el-checkbox>
    <el-link type="primary">忘记密码？</el-link>
  </div>
  <el-button type="primary" class="loginbtn" @click="getLogin"
    >立即登录</el-button
  >
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
//导入组件
import LoginAccount from './LoginAccount.vue'
import LoginPhone from './LoginPhone.vue'
//导入localstorage工具
import cache from '@/utils/cache'

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const isRePassword = ref(cache.getCache('isRePw') ?? false)
    //当前面板
    let currentCpn = ref('account')
    const accountRef = ref()
    function getLogin() {
      if (isRePassword?.value) {
        cache.setCache('isRePw', isRePassword.value)
      } else {
        cache.removeCache('isRePw')
      }
      //获取localstorage中的是否记住密码
      let toJson = cache.getCache('isRePw')
      if (currentCpn.value === 'account') {
        accountRef.value?.accountLogin(toJson)
      }
    }
    return {
      isRePassword,
      getLogin,
      accountRef,
      currentCpn
    }
  }
})
</script>

<style scoped lang="less">
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
.keeppsd {
  display: flex;
  justify-content: space-between;
}
.loginbtn {
  margin-top: 8px;
  width: 100%;
}
</style>
