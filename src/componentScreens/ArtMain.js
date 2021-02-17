import ArtSearch from "../components/ArtSearch";
import { useState } from "react";
import ArtSearchResults from "../components/ArtSearchResults";
import ArtDepartment from "../components/ArtDepartment";

import InfiniteScroll from "react-infinite-scroll-component";
import "../css/artMain.css";

export default function ArtMain() {
  const [searchArt, setSearchArt] = useState([]);
  console.log(searchArt);

  const [showMore, setShowMore] = useState(false);

  const [page, setPage] = useState(1);

  const showDepartments = () => {
    setShowMore(!showMore);
  };

  return (
    <main className="Art-Main">
      <div className="main_Art">
        <ArtSearch setSearchArt={setSearchArt} />
        <button className="dept_bttn" onClick={showDepartments}>
          {showMore ? "Hide Departments" : "Show Departments"}
        </button>
        {showMore ? <ArtDepartment /> : ""}
      </div>

      <div
        className="scrollableDiv_2"
        style={{
          height: 450,
          width: 615,
          overflow: "auto",
          display: "flex",
          flexDirection: "column-reverse",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        <InfiniteScroll
          dataLength={searchArt.length}
          next={() => setPage(page + 1)}
          hasMore={true}
          loader={<h4></h4>}
          className="infintie_scroll"
          pullDownToRefreshThreshold={50}
          scrollableTarget="scrollableDiv_2"
        >
          {searchArt.map((art, index) => {
            return (
              <div>
                <ArtSearchResults objectIDs={art} key={index} />
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
    </main>
  );
}
