<template>
  <div class="login-account">
    <el-form :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="account.password"
          type="password"
          show-password
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from 'vue'
import type { ElForm } from 'element-plus'
//导入登录账号密码缓存工具
import cache from '@/utils/cache'
//导入vuex
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    //赋值store
    const store = useStore()
    let account = reactive({
      name: cache.getCache('name') ?? '',
      password: cache.getCache('password') ?? ''
    })
    const rules = {
      name: [
        {
          required: true,
          message: '账号的不能为空',
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: '密码不能为空',
          trigger: 'blur'
        }
      ]
    }
    const formRef = ref<InstanceType<typeof ElForm>>()
    //accountLogin执行的方法
    function accountLogin(isRePassword: boolean) {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (isRePassword) {
            cache.setCache('name', account.name)
            cache.setCache('password', account.password)
          } else {
            cache.removeCache('name')
            cache.removeCache('password')
          }
          console.log({ ...account })
          store.dispatch('loginState/actionLoginAccount', { ...account })
        }
      })
    }
    return {
      account,
      rules,
      accountLogin,
      formRef
    }
  }
})
</script>

<style scoped>
.login-account {
  margin-left: 20px;
}
</style>
