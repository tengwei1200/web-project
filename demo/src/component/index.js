/**
 * @Description 全局导出组件
 * @author 滕威
 * @time 2019-12-02
 */
import Select from "./Select/index.vue";
// import pagination from "./common/pagination";
// import table from "./common/table";
// import editor from "./common/editor";
// import collapseForm from "./common/collapseForm";
// import cascader from "./common/cascader";
import Form from "./Form/Form.vue";

function plugin(Vue) {
  if (plugin.installed) return;
  Vue.component("m-select", Select);
  // Vue.component("Co-pagination", pagination);
  // Vue.component("Co-table", table);
  // Vue.component("Co-editor", editor);
  // Vue.component("Co-collapseForm", collapseForm);
  // Vue.component("Co-cascader", cascader);
  Vue.component("m-form", Form);
}

export default plugin;
