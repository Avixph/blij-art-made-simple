import { useState } from "react";
import ArtSearchResults from "./ArtSearchResults";
import { MET_URL } from "../services/constants";

function ArtSearch() {
  const [artSearchResult, setArtSearchResult] = useState([]);

  const fetchArtSearchResults = async () => {
    try {
      const response = await fetch(
        `${MET_URL}/public/collection/v1/search?hasImages=true&q=cat`
      );
      const artSearchResult = await response.json();
      console.log(artSearchResult);
      setArtSearchResult(artSearchResult.artSearchResult);
    } catch (error) {
      console.log(error);
    }
  };
  if (artSearchResult) {
    return (
      <div>
        <h3>no art pieces </h3>
        <button onClick={() => fetchArtSearchResults()}>yo</button>
      </div>
    );
  }
  return (
    <div>
      <ArtSearchResults artSearchResult={artSearchResult} />
    </div>
  );
}
export default ArtSearch;
