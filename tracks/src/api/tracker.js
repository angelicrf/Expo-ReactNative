import axios from "axios";
import { AsyncStorage } from "react-native";

const instance = axios.create({
  baseURL: "http://725e0ec5175b.ngrok.io"
});
instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem("token");
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
