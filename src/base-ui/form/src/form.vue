<template>
  <el-form label-width="100px">
    <el-row>
      <template v-for="item in formItems" :key="item.label">
        <el-col v-bind="screenWidth">
          <el-form-item :label="item.label">
            <template v-if="item.type === 'input' || item.type === 'password'">
              <el-input
                :placeholder="item.placeholder"
                :show-password="item.type === 'password'"
              ></el-input>
            </template>
            <template v-else-if="item.type === 'select'">
              <el-select :fit-input-width="true">
                <el-option
                  v-for="option in item.options"
                  :key="option.label"
                  :value="option.label"
                ></el-option>
              </el-select>
            </template>
            <template v-else-if="item.type === 'datepicker'">
              <el-date-picker
                type="daterange"
                range-separator="To"
                start-placeholder="Start date"
                end-placeholder="End date"
              ></el-date-picker>
            </template>
          </el-form-item>
        </el-col>
      </template>
    </el-row>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFormItem } from './type'
export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>
    },
    screenWidth: {
      type: Object,
      default: () => {
        return {
          xl: 4,
          lg: 8,
          md: 12,
          sm: 24,
          xs: 24
        }
      }
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less"></style>
