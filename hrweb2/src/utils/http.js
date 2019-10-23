import axios from 'axios';
import { Notification } from 'element-ui';

axios.interceptors.request.use(config => {
    // mock?
    return config;
  }, error => {
    return Promise.reject(error);
  });

axios.interceptors.response.use(response => {
    return response;
  }, error => {
    // logger and notification;
    Notification.error({
      title: '错误',
      message: error.message
    });
    return Promise.reject(error);
  });

export default axios; 
