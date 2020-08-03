export default (formConfigList) => {
  const obj = {}
  // 循环字段列表
  for (const item of formConfigList) {
    const type = item.type === 'select' ? '选择' : '输入'
    const trigger = item.type === ('input' || 'textarea') ? 'blur' : 'change'
    if (item.required) {
      if (item.validator) {
        obj[item.value] = {
          required: item.required,
          validator: item.validator,
          trigger: trigger
        }
      } else {
        obj[item.value] = {
          required: item.required,
          message: '请' + type + item.label,
          trigger: trigger
        }
      }
    } else if (item.validator) {
      obj[item.value] = {
        validator: item.validator,
        trigger: trigger
      }
    }
  }
  return obj
}
