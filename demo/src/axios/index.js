/**
 * @Description 导出axios拦截器方法
 * @author 滕威
 * @time 2019-12-02
 */
import axios from "axios";
import qs from "qs";
import {
  Message
} from "element-ui";
// import Router from "../router/router.js";

const service = axios.create({
    //  baseURL:  "http://192.168.30.102:8082/krx",
  // baseURL: "http://192.168.1.127:8595/KRX",
  // baseURL: "http://192.168.30.114:8081/KRX",
  // baseURL: "http://219.139.176.163:8081/XYPRT-DAS",// 襄阳正式外网地址
  //   baseURL: "http://219.139.176.66:8081/XYPRT-DAS",// 襄阳测试外网地址
  timeout: 15000,
  withCredentials: true,
  paramsSerializer: params => qs.stringify(params, {
    arrayFormat: "repeat"
  })
});
service.interceptors.request.use(config => {
    if (
      (config.method === "put" || config.method === "post") &&
      config.headers["Content-Type"] !== "application/json" &&
      config.headers["Content-Type"] !== "multipart/form-data"
    ) {
      config.data = qs.stringify({
        t: Date.parse(new Date()) / 1000,
        ...config.data
      }, {
        arrayFormat: "repeat"
      });
      // config.data = qs.stringify(config.data, { arrayFormat: "repeat" });
    }
    // 时间戳
    if (config.method === "get") {
      config.params = {
        t: Date.parse(new Date()) / 1000,
        ...config.params
      };
    }
    return config;
  }),
  error => {
    Promise.reject(error);
  };

service.interceptors.response.use(
  response => {
    // 401未登录, 301非法访问, 404  都跳到登陆页
    return response;
  },
  error => {
    // if (error.response && error.response.status) {
    //   switch (error.response.status) {
    //     case 401:
    //       Message.error("您还未登录，请您登录！");
    //       Router.push({
    //         name: "login"
    //       });
    //       break;
    //     case 301:
    //       Message.error("您正在进行非法访问，请重新登录！");
    //       Router.push({
    //         name: "login"
    //       });
    //       break;
    //     case 404:
    //       Message.error("无法找到网页，请重新登录！");
    //       Router.push({
    //         name: "login"
    //       });
    //       break;
    //     case 405:
    //       Message.error("您正在进行非法访问，请重新登录！");
    //       Router.push({
    //         name: "login"
    //       });
    //       break;
    //     case 500:
    //       Message.error("服务器错误，请稍后重试！");
    //       break;
    //   }
    // }
    // return Promise.reject(error);
  }
);

export default service;
