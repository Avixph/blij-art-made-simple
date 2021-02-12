import { fetchArtByQuery } from "../services/fetchArt";
import { useState } from "react";

export default function ArtSearch({ searchArt, setSearchArt }) {
  const [search, setSearch] = useState("");

  const handleSearchInput = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <input onChange={handleSearchInput} placeholder="search for art" />
      <button
        onClick={async () => {
          const data = await fetchArtByQuery(search);
          setSearchArt([...searchArt, data]);
        }}
      >
        SEARCH
      </button>
    </div>
  );
}
