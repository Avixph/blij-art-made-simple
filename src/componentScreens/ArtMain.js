import ArtSearch from "../components/ArtSearch";
import { useState } from "react";
import ArtSearchResults from "../components/ArtSearchResults";
import ArtDepartment from "../components/ArtDepartment";
import lineParter from "../images/design_elements/line-parter.svg";

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
      <img src={lineParter} alt="" />
      {searchArt.map((art, index) => {
        return (
          <div>
            <ArtSearchResults objectIDs={art} key={index} />
          </div>
        );
      })}
    </main>
  );
}
