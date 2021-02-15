import axios from "axios";
import { MET_URL } from "./constants";

export async function fetchArtByQuery(query) {
  const searchAPI = `${MET_URL}/public/collection/v1/search?hasImages=true&q=${query}`;
  const searchInfo = await axios.get(searchAPI).then(({ data }) => {
    return data;
  });
  return searchInfo;
}

export async function fetchArtByDepartmentID(departmentId) {
  console.log(departmentId);
  const deptArtAPI = `${MET_URL}/public/collection/v1/objects?departmentIds=${departmentId}`;

  const deptArtInfo = await axios.get(deptArtAPI).then(({ data }) => {
    return data;
  });
  console.log(deptArtInfo);
  return deptArtInfo;
}

export async function fetchArtByObjectID(objectIDs) {
  console.log(objectIDs);
  const requests = objectIDs.slice(0, 10).map((objectId) => {
    return axios.get(`${MET_URL}/public/collection/v1/objects/${objectId}`);
  });
  // const artAPI = `${MET_URL}/public/collection/v1/objects/${objectIDs[0]}`;

  const artInfo = await Promise.all(requests)
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
