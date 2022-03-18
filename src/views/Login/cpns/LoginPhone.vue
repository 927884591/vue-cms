<template>
  <div class="login-phone">
    <el-form>
      <el-form-item label="手机号">
        <el-input v-model="getVerify.phone"></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <div class="getcode">
          <el-input v-model="getVerify.code"></el-input>
          <el-button type="primary" class="verify">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const getVerify = reactive({
      phone: '',
      code: ''
    })
    return {
      getVerify
    }
  }
})
</script>

<style scoped>
.login-phone {
  margin-left: 20px;
}
.getcode {
  display: flex;
}
.verify {
  margin-left: 8px;
}
</style>
