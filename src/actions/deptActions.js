import axios from "axios";
import { MET_URL } from "./constants";

export const Get_ArtDept = `Get_ArtDept`;
export const Get_ArtDept_Success = `Get_ArtDept_Success`;
export const Get_ArtDept_Fail = `Get_ArtDept_Fail`;

export const getArtDept = () => ({
  type: Get_ArtDept,
});

export const getArtDeptSuccess = (artDept) => ({
  type: Get_ArtDept_Success,
  payload: artDept,
});

export const getArtDeptFail = () => ({
  type: Get_ArtDept_Fail,
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

      dispatch(getArtDeptSuccess(data));
      console.log(data.departments);
    } catch (error) {
      dispatch(getArtDeptFail());
    }
  };
};
