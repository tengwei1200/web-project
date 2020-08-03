<template>
  <div class="m-form">
    <el-form :model="enInform" :rules="rules" ref="enInform" :label-width="labelWidth" label-position="left">
      <el-row>
        <el-col :span="spanCol">
          <el-form-item ref="form" v-for="(item, index) in formConfigList" :class="item.required ? '' : 'textLabel'"
            :key="index" :label="item.label" :prop="item.value" :error="errRules[item.value]">
            <!-- solt -->
            <template v-if="item.type === 'slot'">
              <slot :name="item.value" />
            </template>
            <!-- 文字输入框 -->
            <el-input v-model="enInform[item.value]" v-if="item.type === 'input'" :disabled="item.disabled" :clearable="item.clearable"
              :placeholder="`${item.placeholder ? item.placeholder : ''}`"></el-input>
            <span v-if="item.inputSpan" style="margin-left: 8px;">{{
                  item.inputSpan
                }}</span>
            <!-- 密码输入框 -->
            <el-input v-model="enInform[item.value]" :placeholder="`${item.placeholder ? item.placeholder : ''}`" v-if="item.type === 'password'"
              :clearable="item.clearable" :disabled="item.disabled" type="password"></el-input>
            <!-- 数字输入框 -->
            <el-input v-model.number="enInform[item.value]" :placeholder="`${item.placeholder ? item.placeholder : ''}`"
              v-if="item.type === 'number'" :clearable="item.clearable" :disabled="item.disabled"></el-input>
            <!-- 文本域 -->
            <el-input type="textarea" v-model="enInform[item.value]" v-if="item.type === 'textarea'" :placeholder="`${item.placeholder ? item.placeholder : ''}`"
              :clearable="item.clearable" :disabled="item.disabled"></el-input>
            <el-radio-group v-model="enInform[item.value]" :disabled="item.disabled" v-if="item.type === 'radio'">
              <el-radio v-for="(item, index) in item.option" :key="index" :label="item.value">{{ item.label }}</el-radio>
            </el-radio-group>
            <!-- span -->
            <span style="color: red;" v-if="item.type === 'span'">{{
                  item.value
                }}</span>
            <!-- 下拉框 -->
            <m-select :multiple="item.multiple" :codeSting="enInform[item.value]" :option="item.options" :queryParams="item.queryParams ? item.queryParams : ''"
              :clearable="item.clearable" :disabled="item.disabled" :placeholder="`${item.placeholder ? item.placeholder : ''}`"
              v-if="item.type === 'select'" @change="fun_SelectChange($event, item.value)" />
            <!-- 树形下拉框 -->
            <!--        <Co-cascader :codeSting="enInform[item.value]" :sqlId="`${item.sqlId ? item.sqlId : ''}`" :params="item.params"
              :url="`${item.url ? item.url : ''}`" :clearable="item.clearable" :disabled="item.disabled" :optionProps="item.optionProps"
              :showAllLevels="item.showAllLevels" v-if="item.type === 'cascader'" @change="fun_SelectChange($event, item.value)" /> -->
            <!-- 日期选择框 -->
            <el-date-picker v-if="item.type === 'date'" v-model="enInform[item.value]" :type="item.dateType"
              :picker-options="item.TimePickerOptions" :clearable="item.clearable" :disabled="item.disabled"
              :placeholder="`${item.placeholder ? item.placeholder : ''}`" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <!-- 自定义按钮组 -->
    <div class="tjBtn">
      <el-button v-for="(item, index) of formBtnList" :type="item.type" :icon="'el-icon-' + item.icon" :key="index"
        @click="fun_Submission('enInform', item.el)">{{item.name}}</el-button>
    </div>
  </div>
</template>
<script src="./Form.js"></script>
<style src="./Form.scss" lang="scss" scoped></style>
