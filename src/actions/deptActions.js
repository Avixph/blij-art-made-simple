// import axios from "axios";
import { MET_URL } from "./constants";

export const Get_ArtDept = `Get_ArtDept`;
export const Get_ArtDept_Success = `Get_ArtDept_Success`;
export const Get_ArtDept_Fail = `Get_ArtDept_Fail`;

export const getArtDept = () => ({
  type: Get_ArtDept,
});

export const getArtDeptSuccess = () => ({
  type: Get_ArtDept_Success,
  payload: artDept,
});

export const getArtDeptFail = () => ({
  type: Get_ArtDeptFail,
});

export const departmentInfo = async () => {
  departmentAPI = `${MET_URL}/public/collection/v1/departments`;
  // const departmentData = await axios.get(departmentAPI).then(({ data }) => {
  //   return data;
  // });
  // return departmentData;
  return async (dispatch) => {
    dispatch(getArtDept());
    try {
      const response = await fetch(departmentAPI);
      const data = await response.json();
      dispatch(getArtDeptSuccess(data));
    } catch (error) {
      dispatch(getArtDeptFail());
    }
  };
};
