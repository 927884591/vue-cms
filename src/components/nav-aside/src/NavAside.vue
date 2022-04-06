<template>
  <div class="nav-aside">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="" />
      <span class="title">Vue3+Typescript</span>
    </div>
    <el-menu default-active="1" :collapse="istrue">
      <template v-for="item in userMenu" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="`${item.id}`">
            <template #title>
              <el-icon>
                <component
                  v-if="item.icon == 'el-icon-chat-line-round'"
                  :is="'ChatLineRound'"
                ></component>
                <component v-else :is="item.icon.split('-')[2]"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="citem in item.children" :key="citem.id">
              <el-menu-item
                :index="`${citem.id}`"
                @click="handleMenuItem(citem)"
              >
                <span>{{ citem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="`${citem.id}`">
            {{ citem.name }}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default defineComponent({
  props: {
    istrue: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const store = useStore()
    const route = useRouter()
    const userMenus = store.state.loginState.userMenus
    // for (let i = 0; i < userMenus; i++) {
    //   userMenus[i].cicon = userMenus[i].icon.split('-')
    //   console.log(userMenus[i].cicon)
    // }
    console.log(userMenus[0].icon.split('-')[2])
    const userMenu = computed(() => userMenus)
    const handleMenuItem = (item: any) => {
      route.push({
        path: item.url ?? '/not-fount'
      })
    }
    return {
      userMenu,
      handleMenuItem
    }
  }
})
</script>

<style scoped lang="less">
.nav-aside {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
      line-height: auto;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #001529 !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
