import axios from "axios";
import { MET_URL } from "./constants";

export const departmentInfo = async () => {
  departmentAPI = `${MET_URL}/public/collection/v1/departments`;
  const departmentData = await axios.get(departmentAPI).then(({ data }) => {
    return data;
  });
  return departmentData;
};
