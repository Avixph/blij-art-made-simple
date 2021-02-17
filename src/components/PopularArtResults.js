import { fetchPopularArt } from "../services/fetchArt";
import { useState, useEffect } from "react";
import PopularArtCollection from "../componentScreens/PopularArtCollection";

export default function PopularArtResults() {
  const [popArt, setPopArt] = useState([]);

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
    <div className="popular-art-view">
      {popArt.map((art, index) => {
        return (
          <div>
            <PopularArtCollection objectIDs={art} key={index} />
          </div>
        );
      })}
    </div>
  );
}
