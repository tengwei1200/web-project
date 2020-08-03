export default {
  data() {
    return {}
  },
  props: {
    // 表单数据
    enInform: {
      type: Object
    },
    spanCol: {
      type: Number,
      default: 8
    },
    // 相关字段
    formConfigList: {
      type: Array
    },
    // 验证规则
    rules: {
      type: Object
    },
    // 自定义验证规则
    errRules: {
      type: Object
    },
    // label宽度
    labelWidth: {
      type: String,
      default: "120px"
    },
    refObj: {
      type: Object
    },
    formBtnList: {
      type: Array
    }
  },
  // watch: {
  //   enInform: {
  //     handler: function() {
  //       // 将form实例返回到父级
  //       this.$emit("update:refObj", this.$refs.enInform);
  //     },
  //     deep: true // 深度监听
  //   }
  // },
  mounted() {
    // 将form实例返回到父级
    // this.$emit("update:refObj", this.$refs.enInform);
  },
  methods: {
    // 提交按钮
    fun_Submission(formName, el) {
      const obj = {
        ref: this.$refs[formName],
        el: el
      };
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$emit("fun_Submission", obj);
        } else {
          // 校验不通过，返回false，页面给出前端提示
          // this.$message.error("请按提示修改！");
          return false;
        }
      });
    },
    // 获取字段列表
    // getConfigList() {
    //   return this.fieldList.filter(item => !item.hasOwnProperty('show') || (item.hasOwnProperty('show') && item.show))
    // },
    // 得到placeholder的显示
    // getPlaceholder(row) {
    //   let placeholder
    //   if (row.type === 'input' || row.type === 'textarea') {
    //     placeholder = '请输入' + row.label
    //   } else if (row.type === 'select' || row.type === 'time' || row.type === 'date') {
    //     placeholder = '请选择' + row.label
    //   } else {
    //     placeholder = row.label
    //   }
    //   return placeholder
    // },
    // 绑定的相关事件
    fun_SelectChange($event, value) {
      this.$emit('fun_SelectChange', $event.code, value)
    }
  }
}
