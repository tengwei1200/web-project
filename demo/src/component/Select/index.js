// 引入axios方法
import { fun_GetDic } from "@/api/";
/**
 * 组件默认导出属性
 * @author 滕威
 */
export default {
  // 初始化数据对象
  data() {
    return {
      options: [], // 下拉框数组
      value: null, // 下拉框绑定的value值
      formDate: {
        code: null // 子组件value存放对象
      }
    };
  },

  // 接收来自父组件的数据
  props: {
    // 请求字典参数对象
    queryParams: {
      type: Object,
      required: false,
      default: () => { return {} }
    },
    // 父组件绑定值
    codeSting: {
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    multipleValue: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean
    },
    option: {
      type: Array
    }
  },

  // 监听
  watch: {
    // 监听父组件绑定值
    codeSting: {
      // handler监听改变之后的值、改变之前的值
      handler(newName) {
        // 如果有改变的值
        if (newName) {
          // 将改变的值赋值给下拉框绑定的value值
          this.value = newName;
        }
      },
      immediate: true,
      deep: false // 不需要深度监听
    }
  },

  // 模板编译完成
  mounted() {
    // 调用字典请求方法
      console.log(this.queryParams, this.option)
    if (this.queryParams) {
      // this.queryParams = JSON.parse(this.queryParams)
      this.fun_GetDic();
    } else {
      this.options = this.option;
    }
  },

  // 自定义事件
  methods: {
    /**
     * 下拉框change事件
     * @author 滕威
     */

    handleFilter() {
      // 将下拉框选择的value值赋值给formDate.code
      this.formDate.code = this.value;
      // $emit事件将选择的下拉框value值发送给调用change事件者
      this.$emit("change", this.formDate);
    },

    /**
     * 请求字典方法
     * @author 滕威
     */
    async fun_GetDic() {
      // 调用字典axios方法
      let res = await fun_GetDic("/combox/CommonCombobox.do", this.queryParams);
      // 判断请求是否成功
      if (res.data.result) {
        // 请求成功的场合
        // 将解析的data数组赋值给下拉框
        this.options = res.data.data;
      }
    }
  }
};
