import axios from 'axios';
import { Message, } from 'element-ui';
import myconfig from '@/config';
// import NProgress from 'nprogress';
import store from "../store";
const service = axios.create({
    baseURL: myconfig.baseUrl
})
service.interceptors.request.use(
    config => {
        if (window.localStorage.getItem('token')) {
            config.headers['token'] = window.localStorage.getItem('token');
        }
        // NProgress.start();
        return config;
    },
    error => {
        Promise.reject(error);
    }
)
service.interceptors.response.use(
    response => {
        if (response.data.code == '300' && response.data.message == "请重新登陆") {
            setTimeout(() => {
                store.commit('SET_LoginDialog', true);
            }, 200);
        }
        // NProgress.done()
        return response;
    },
    error => {
        Message({
            message: error.message,
            type: 'error',
            duration: 1000
        });
        Promise.reject(error);
    }
);
export default service;