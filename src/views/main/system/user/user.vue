<template>
  <div class="user">
    <y-form :formItems="searchFormItems"></y-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import YForm from '@/base-ui/form'
import { searchFormItems } from './config/search.config'
export default defineComponent({
  name: 'user',
  components: {
    YForm
  },
  setup() {
    return {
      searchFormItems
    }
  }
})
</script>

<style lang="less" scoped>
.user {
  padding-top: 18px;
  background-color: #fff;
  border-radius: 10px;
}
</style>
