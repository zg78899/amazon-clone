import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-challenge-d691f.cloudfunctions.net/api", //then API(cloud funciton) URL
});
export default instance;
//challenge-d691f