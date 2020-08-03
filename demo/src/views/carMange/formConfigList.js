export default class formConfigList {
  static formList() {
    return [{
      label: "车辆名称",
      type: "input",
      value: "userName",
      required: true,
      clearable: true,
      placeholder: "请输入车辆名称"
    }, {
      label: "车辆识别号",
      type: "input",
      value: "userName1",
      required: true,
      clearable: true,
      placeholder: "请输入车辆名称"
    }, {
      label: "车辆类型",
      type: "select",
      value: "userName2",
      required: true,
      clearable: true,
      queryParams: {
        sqlId: "8f703a9f-9c12-41ab-84fc-a92f0ac12345",
        dictionaryId: "821ac6e0-9dc2-4f3c-b632-6704c628dcf4",
      },
      options: [
        { name: "测试车", value: "0" },
        { name: "媒体车", value: "1" },
        { name: "二手车", value: "2" }
      ],
      placeholder: "请选择车辆名称"
    }, {
      label: "车辆状态",
      type: "slot",
      value: "userName3",
      required: true
    }]
  }
  static enInform() {
    return {
      userName: null,
      userName1: null,
      userName2: null,
      userName3: null,
    }
  }
  // static rules() {
  //   return {
  //     userName: [{
  //       required: true,
  //       message: '请输入名称',
  //       trigger: 'blur'
  //     }],
  //     userName1: [{
  //       required: true,
  //       message: '请输入名称',
  //       trigger: 'blur'
  //     }],
  //     userName2: [{
  //       required: true,
  //       message: '请输入名称',
  //       trigger: 'blur'
  //     }],
  //     userName3: [{
  //       required: true,
  //       message: '请输入名称',
  //       trigger: 'blur'
  //     }],
  //   }
  // }
}
