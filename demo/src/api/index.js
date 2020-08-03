import axios from "@/axios";

/**
 * get请求
 * @author zhouy
 * @param {*} url 请求路径
 * @param {*} parameter 请求参数key=value&key1=value1
 */
export function fun_GetAction(url, parameter) {
  return axios({
    url: url,
    method: "get",
    params: parameter
  });
}

/**
 * post请求
 * @author zhouy
 * @param {*} url 请求路径
 * @param {*} parameter 请求参数{key:value,key1:value1}
 */
export function fun_PostAction(url, parameter) {
  return axios({
    url: url,
    method: "post",
    data: parameter
  });
}

/**
 * @Description 上传
 * @author 滕威
 * @params data  入参对象
 * @time 2019-12-02
 */
export const fun_UploadImg = (url, data, time) => {
  return axios({
    url: url,
    method: "post",
    timeout: time,
    headers: {
      "Content-Type": "multipart/form-data"
    },
    data
  });
};

/**
 * 自定义请求 {method=get|post}
 * @author zhouy
 * @param {*} url 请求路径
 * @param {*} parameter 请求参数
 * @param {*} method 请求方式
 */
export function fun_HttpAction(url, parameter, method) {
  return axios({
    url: url,
    method: method,
    data: parameter
  });
}

/**
 * put请求, 修改方法
 * @author zhouy
 * @param {*} url 请求路径
 * @param {*} parameter 请求参数{key:value,key1:value1}
 */
export function fun_PutAction(url, parameter) {
  return axios({
    url: url,
    method: "put",
    data: parameter
  });
}

/**
 * delete请求, 删除方法
 * @author zhouy
 * @param {*} url 请求路径
 * @param {*} parameter 请求参数keys=1,2,3
 */
export function fun_DeleteAction(url, parameter) {
  return axios({
    url: url,
    method: "delete",
    data: parameter
  });
}

/**
 * @Description 上传
 * @author zhouy
 * @params data  入参对象
 * @time 2019-12-02
 */
export function fun_Upload(parameter) {
  return axios({
    url: "/corpPictureinfor/InsertCorpPictureinfo.do",
    method: "post",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    data: parameter
  });
}

/**
 * @Description 下载
 * @author zhouy
 * @params data  入参对象
 * @time 2019-12-02
 */
export const fun_Download = (url, data) => {
  return axios({
    url: url,
    responseType: "blob",
    timeout: 0,
    method: "post",
    data
  });
};

/**
 * @Description 字典
 * @author 滕威
 * @params sqlId、dictionaryId、typNum、certTypeNum、tradeLargeClass  入参字段
 * @time 2019-12-02
 */
export function fun_GetDic(url, params) {
  return axios({
    method: "post",
    url,
    params
  });
}
