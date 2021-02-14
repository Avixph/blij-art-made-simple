import { fetchArtByQuery } from "../services/fetchArt";
import { useState } from "react";
import ArtSearchResults from "./ArtSearchResults";

export default function ArtSearch({ searchArt, setSearchArt }) {
  const [search, setSearch] = useState("");

  const handleSearchInput = (event) => {
    setSearch(event.target.value);
  };

  if (search.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>There are no more art pieces to display</h2>

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
      </main>
    );
  }

  return (
    <div>
      <ArtSearchResults search={searchArt} />
    </div>
  );
}
