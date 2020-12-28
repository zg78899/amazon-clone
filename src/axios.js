import axios from "axios";

const instance = axios.create({
  baseURL: "...", //then API(cloud funciton) URL
});
export default instance;
