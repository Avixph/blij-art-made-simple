import { fetchArtByQuery } from "../services/fetchArt";
import { useState } from "react";

export default function ArtSearch({ setSearchArt }) {
  const [search, setSearch] = useState("");

  const handleSearchInput = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    const data = await fetchArtByQuery(search);
    console.log(data.objectIDs);
    setSearchArt(data.objectIDs);
    setSearch("");
  };

  return (
    <div>
      <form className="search-bar">
        <input
          value={search}
          onChange={handleSearchInput}
          placeholder="search for artist name, art title, culture, department, etc.  "
        />
        <button type="submit" onClick={handleSearchSubmit} className="search-bttn">
          ➤
        </button>
      </form>
    </div>
  );
}
