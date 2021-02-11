import axios from "axios";
import { MET_URL } from "./constants";

export const GET_ARTDEPT = `GET_ARTDEPT`;
export const GET_ARTDEPT_SUCCESS = `GET_ARTDEPT_SUCCESS`;
export const GET_ARTDEPT_FAIL = `GET_ARTDEPT_FAIL`;

export const getArtDept = () => ({
  type: GET_ARTDEPT,
});

export const getArtDeptSuccess = (artDept) => ({
  type: GET_ARTDEPT_SUCCESS,
  payload: artDept,
});

export const getArtDeptFail = () => ({
  type: GET_ARTDEPT_FAIL,
});

export const fetchDepartments = () => {
  const departmentAPI = `${MET_URL}/public/collection/v1/departments`;

  // const departmentData = await axios.get(departmentAPI).then(({ data }) => {
  //   return data;
  // });
  // return departmentData;
  return async (dispatch) => {
    dispatch(getArtDept());
    try {
      const response = await axios.get(departmentAPI);

      const { data } = response;

      dispatch(getArtDeptSuccess(data.departments));
      console.log(data.departments);
    } catch (error) {
      dispatch(getArtDeptFail());
    }
  };
};
