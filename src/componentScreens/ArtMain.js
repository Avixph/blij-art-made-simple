import { NavLink } from "react-router-dom";
import ArtSearch from "../components/ArtSearch";
import { useState } from "react";
import ArtSearchResults from "../components/ArtSearchResults";

export default function ArtMain() {
  const [searchArt, setSearchArt] = useState([]);

  return (
    <main className="Art-Main">
      <NavLink to="/artDepartments" className="button">
        <button type="button">
          View <br /> Departments
        </button>
      </NavLink>

      <ArtSearch searchArt={searchArt} setSearchArt={setSearchArt} />
      {searchArt.map((art, index) => {
        return <ArtSearchResults {...art} key={index} />;
      })}
    </main>
  );
}
