
import ArtSearch from "../components/ArtSearch";
import { useState } from "react";
import ArtSearchResults from "../components/ArtSearchResults";
import ArtDepartment from "../components/ArtDepartment";

export default function ArtMain() {
  const [searchArt, setSearchArt] = useState([]);
  console.log(searchArt);

  const [showMore, setShowMore] = useState(false);

  const showDepartments = () => {
    setShowMore(!showMore);
  };

  return (
    <main className="Art-Main">
      <ArtSearch setSearchArt={setSearchArt} />
      <button onClick={showDepartments}>
        {showMore ? "Hide Departments" : "Show Departments"}
      </button>
      {showMore ? <ArtDepartment /> : ""}
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
