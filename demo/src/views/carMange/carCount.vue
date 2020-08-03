<template>
  <div class="car-count main-layout">
    <!-- form -->
    <m-form ref="form" :enInform="enInform" :rules="rules" :errRules="errRules" :formConfigList="formConfigList" @fun_SelectChange="fun_SelectChange" :formBtnList="formBtnList" @fun_Submission="fun_Submission">
      <!-- 自定义插槽的使用 -->
      <div class="slot" slot="userName3">
        <el-input v-model="enInform.userName3" placeholder="请输入车辆名称"></el-input>
      </div>
    </m-form>
  </div>
</template>

<script>
  import FormConfigList from "./formConfigList";
  export default {
    data() {
      // const checkEmail = (rule, value, callback) => {
      //   if (value === '') {
      //     callback(new Error('请输入邮箱'));
      //   } else {
      //     if (!this.formInfo.data.name.test(/^([-_A-Za-z0-9.]+)@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/)) {
      //       this.formInfo.ref.validateField('name');
      //     }
      //     callback();
      //   }
      // };
      return {
        // 表单相关
        formConfigList: FormConfigList.formList(),
        enInform: FormConfigList.enInform(),
        rules: {},
        errRules: {},
        formBtnList: [
          { type: "success", name: "保存", icon: "refresh-left", el: "bc" },
          { type: "primary", name: "提交", icon: "finished", el: "tj" },
        ]
      }
    },
    methods: {
      fun_Submission(obj) {
        switch(obj.el) {
          case "bc":
          console.log(this.enInform)
          break;
          default:
          // 清空校验
          obj.ref.clearValidate();
        }
      },
      // 初始化验证
      initRules() {
        this.rules = this.$initRules(this.formConfigList)
      },
      handleClick(event) {
        if (event === "selectFile") {
          this.$message.success("selectFile");
        } else if (event === "primary") {
          // console.log(this.errRules)
        }
      },
      fun_SelectChange(event, val) {
        // console.log(event, val)
        switch(val) {
          case "userName2":
            this.enInform.userName2 = event;
          break;
        }
      }
    },
    mounted() {
      this.initRules();
      this.errRules = {...this.enInform};
    }
  }
</script>
