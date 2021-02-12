import axios from "axios";
import { MET_URL } from "./constants";

export const GET_ARTSEARCH = `GET_ARTSEARCH`;
export const GET_ARTSEARCH_SUCCESS = `GET_ARTSEARCH_SUCCESS`;
export const GET_ARTSEARCH_FAIL = `GET_ARTSEARCH_FAIL`;

export const getArtSearch = () => ({
  type: GET_ARTSEARCH,
});

export const getArtSearchSuccess = (artSearch) => ({
  type: GET_ARTSEARCH_SUCCESS,
  payload: artSearch,
});

export const getArtSearchFail = () => ({
  type: GET_ARTSEARCH_FAIL,
});

export const fetchArtSearch = () => {
  const artSearchAPI = `${MET_URL}/public/collection/v1/search?hasImages=true&q=`; //${artSearch}
  return async (dispatch) => {
    dispatch(getArtSearch());
    try {
      const response = await axios.get(artSearchAPI);
      const { data } = response;
      dispatch(getArtSearchSuccess(data));
      console.log(data.objectIDs);
    } catch (error) {
      dispatch(getArtSearchFail());
    }
  };
};
