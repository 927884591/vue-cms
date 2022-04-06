<template>
  <div class="hander">
    <div @click="handle" class="handerright">
      <el-icon v-if="!isFold"><arrow-left-bold /></el-icon>
      <el-icon v-else><arrow-right-bold /></el-icon>
    </div>
  </div>
  <div class="handerleft">
    <div class="fold">面包屑</div>
    <div class="userinfo">
      <el-dropdown>
        <span class="userspan">
          <el-avatar :size="25"></el-avatar>
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>用户信息</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['istrue'],
  setup(props, { emit }) {
    let isFold = ref(false)
    function handle() {
      isFold.value = !isFold.value
      emit('istrue', isFold.value)
    }
    return {
      isFold,
      handle
    }
  }
})
</script>

<style scoped lang="less">
.handerleft {
  display: flex;
  height: 24px;
  line-height: 24px;
  flex: 1;
  justify-content: space-between;
  padding: 0 10px;
}
.userspan {
  display: flex;
  align-items: center;
}
.el-dropdown--default {
  height: 24px;
  line-height: 24px;
}
</style>
