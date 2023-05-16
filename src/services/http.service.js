
import axios from 'axios';







class HttpService {
    constructor() {
      axios.defaults.baseURL = "http://localhost:3002";
  
      axios.interceptors.request.use((config) => {
        console.log('CONFIG: ', config);
      // let token = JSON.parse(localStorage.getItem("ACCESS_TOKEN"));
        // if (config.url !== LOGIN && (config.url === WHOAMI || token)) {
        //   config.headers['token'] = `${token}`
        // }
  
        return config;
      }, (error) => {
        return Promise.reject(error);
      });
  
      axios.interceptors.response.use((response) => {
      //   console.log('Interceptor response success', response);
        return response;
      },
      (error) => {
        // if (!error.response) return Promise.reject(error);
  
  
        // if (error.response.status === 401) {
        //   localStorage.setItem(IS_LOGGED_IN, false.toString());
        //   history.push(PATHS.PANEL_LOGIN);
        // }
        return Promise.reject(error);
      })
    }
  
    get(url, config) {
      return axios.get(url, config);
    }
  
    post(url, data, config) {
      return axios.post(url, data, config);
    }
  
    put(url, data, config) {
      return axios.put(url, data, config);
    }
  
    patch(url, data, config) {
      return axios.patch(url, data, config);
    }
  
    delete(url, config) {
      return axios.delete(url, config);
    }
  }
  
  export default new HttpService();