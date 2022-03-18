<template>
  <div class="login">
    <div class="out">
      <h1>后台管理系统</h1>
      <login-panel />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
//导入组件
import LoginPanel from './cpns/LoginPanel.vue'
export default defineComponent({
  components: {
    LoginPanel
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
h1 {
  text-align: center;
}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
.login .out {
  width: 300px;
}
</style>
