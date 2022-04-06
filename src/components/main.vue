<template>
  <el-container class="main-content">
    <el-aside :width="cistrue ? 55 + 'px' : 210 + 'px'">
      <nav-aside :istrue="cistrue" v-model="cistrue" />
    </el-aside>
    <el-container class="page">
      <el-header class="page-header">
        <nav-header @istrue="istrue" />
      </el-header>
      <el-main class="page-content">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavAside from '@/components/nav-aside/src/NavAside.vue'
import NavHeader from '@/components/nav-header/src/NavHeader.vue'
export default defineComponent({
  components: {
    NavAside,
    NavHeader
  },
  setup() {
    let cistrue = ref(false)
    function istrue(is: boolean) {
      cistrue.value = is
    }
    return {
      istrue,
      cistrue
    }
  }
})
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 48px !important;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
