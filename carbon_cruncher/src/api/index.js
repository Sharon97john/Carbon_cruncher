import axios from "axios";
const base_url = "http://127.0.0.1:8000/";
export const carbonfootprint_calculation = () => {
  return axios.get(base_url + "consumption/carbonfootprint_calculation");
};