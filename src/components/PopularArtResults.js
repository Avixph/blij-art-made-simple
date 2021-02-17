import { fetchPopularArt } from "../services/fetchArt";
import { useState, useEffect } from "react";
import PopularArtCollection from "../componentScreens/PopularArtCollection";
import InfiniteScroll from "react-infinite-scroll-component";
import "../css/popArt.css";

export default function PopularArtResults() {
  const [popArt, setPopArt] = useState([]);
  const [page, setPage] = useState(1);

  const fetchPopArtInfo = async () => {
    const data = await fetchPopularArt();
    console.log(data?.objectIDs);
    setPopArt(data?.objectIDs);
  };

  useEffect(() => {
    fetchPopArtInfo();
  }, []);

  console.log(`${popArt}`);

  return (
    <div>
      <h3 className="popArt_title_1">Popular piece</h3>
      <h5 className="popArt_para_1">explore Pieces on view</h5>

      <div
        className="scrollableDiv"
        style={{
          height: 290,
          width: 555,
          overflow: "auto",
          display: "flex",
          flexDirection: "column-reverse",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        <InfiniteScroll
          dataLength={popArt.length}
          next={() => setPage(page + 1)}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          className="infintie_scroll"
          pullDownToRefreshThreshold={50}
          scrollableTarget="scrollableDiv"
        >
          {popArt.map((art, index) => {
            return (
              <div>
                <PopularArtCollection objectIDs={art} key={index} />
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
}
