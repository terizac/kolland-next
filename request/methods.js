import request from "./index.js";
import qs from "qs";

export const get = (url, params, window) => {
  return request({
    url: url,
    method: "get",
    loading: true,
    // responseType: "application/json",
    params: {
      ...params,
    },
  });
};

export const post = (url, data, params, window) => {
  data = {
    ...data,
  };
  data = qs.stringify(data);
  return request({
    url: url,
    method: "post",
    loading: true,
    data,
    params: {
      ...params,
    },
    // responseType: "application/json",
  });
};

export const formDataRequest = (url, formData, params, window) => {
  return request({
    url: url,
    method: "post",
    loading: true,
    data: formData,
    contentType: "multipart/form-data",
    processData: false,
    params: {
      ...params,
    },
    // responseType: "application/json",
  });
};
