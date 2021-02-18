import axios from "axios";
import { MET_URL } from "./constants";

// --------------------------------------------------------------------------------------------------------------------------

export async function fetchArtByQuery(query) {
  const searchAPI = `${MET_URL}/public/collection/v1/search?hasImages=true&q=${query}`;
  const searchInfo = await axios.get(searchAPI).then(({ data }) => {
    return data;
  });
  const searchResults = {
    ...searchInfo,
    objectIDs: searchInfo.objectIDs.slice(0, 800),
  };
  return searchResults;
}

export async function fetchArtByObjectID(objectIDs) {
  console.log(objectIDs);
  const artAPI = `${MET_URL}/public/collection/v1/objects/${objectIDs}`;

  const artInfo = await axios.get(artAPI).then(({ data }) => {
    return data;
  });
  console.log(artInfo);
  return artInfo;
}

// --------------------------------------------------------------------------------------------------------------------------

export async function fetchArtByDepartmentID(departmentId) {
  console.log(departmentId);
  const deptArtAPI = `${MET_URL}/public/collection/v1/objects?departmentIds=${departmentId}`;

  const deptArtInfo = await axios.get(deptArtAPI).then(({ data }) => {
    return data;
  });
  console.log(deptArtInfo);
  return deptArtInfo;
}

export async function fetchArtByObjectIDForDept(objectIDs) {
  console.log(objectIDs);

  const artAPI = objectIDs.slice(0, 200).map((objectId) => {
    return axios.get(`${MET_URL}/public/collection/v1/objects/${objectId}`);
  });

  const artInfo = await Promise.all(artAPI)

    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(`${error} somethingelse`);
    });
  console.log(`${artInfo} something`);
  return artInfo;
}

// fetchArtByObjectID is working for depsrtments, do not change! what has to happen
//is taking the old code that worked for search  but creating another function but just using for
//search and leaving this for departments

// --------------------------------------------------------------------------------------------------------------------------

export async function fetchPopularArt() {
  // const PopularSearchAPI = `${MET_URL}/public/collection/v1/search?hasImages=true&isOnView=true&q=${query}`;

  const PopularSearchAPI2 = `${MET_URL}/public/collection/v1/search?hasImages=true&isOnView=true&q=Metropolitan%20Museum%20of%20Art,%20New%20York,%20NY`;
  console.log(PopularSearchAPI2);
  const PopularSearchInfo = await axios
    .get(PopularSearchAPI2)
    .then(({ data }) => {
      console.log(data);
      return data;
    });

  const PopularSearchResults = {
    ...PopularSearchInfo,
    objectIDs: PopularSearchInfo.objectIDs.slice(0, 500),
  };

  return PopularSearchResults;
}
