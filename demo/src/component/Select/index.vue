<!--
 * 下拉框组件
 * @author 滕威
 * @time 2019-12-6
 *
-->
<!-- 模板(html)代码 start -->
<template>
  <el-select
    v-model="value"
    :disabled="disabled"
    :clearable="clearable"
    placeholder="请选择"
    @change="handleFilter"
    :multiple="multipleValue"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.name"
      :value="item.value"
    ></el-option>
  </el-select>
</template>
<!-- 模板(html)代码 end -->
<script src="./index.js"></script>
<style src="./index.scss" lang="scss" scoped></style>
