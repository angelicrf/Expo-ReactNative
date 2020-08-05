import axios from "axios";
import { AsyncStorage } from "react-native";

const instance = axios.create({
  baseURL: "http://6f99973c61cf.ngrok.io"
});
instance.interceptors.request.use(
  async config => {
    const token = AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    //console.log(config);
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default instance;
