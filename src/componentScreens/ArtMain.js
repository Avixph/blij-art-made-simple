import { NavLink } from "react-router-dom";
import ArtSearch from "../components/ArtSearch";
import { useState } from "react";
import ArtSearchResults from "../components/ArtSearchResults";

export default function ArtMain() {
  const [searchArt, setSearchArt] = useState([]);
  console.log(searchArt);
  return (
    <main className="Art-Main">
      <NavLink to="/art/artDepartments" className="button">
        <button type="button">
          View <br /> Departments
        </button>
      </NavLink>

      <ArtSearch setSearchArt={setSearchArt} />
      {searchArt.map((art, index) => {
        return (
          <div>
            {/* <h1>{art}</h1> */}
            <ArtSearchResults objectIDs={art} key={index} />
          </div>
        );
      })}
    </main>
  );
}
