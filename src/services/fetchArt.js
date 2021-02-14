import axios from "axios";
import { MET_URL } from "./constants";

export async function fetchArtByQuery(query) {
  const searchAPI = `${MET_URL}/public/collection/v1/search?hasImages=true&q=${query}`;
  const searchInfo = await axios.get(searchAPI).then(({ data }) => {
    return data;
  });
  return searchInfo;
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
