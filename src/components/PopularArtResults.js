import { fetchPopularArt } from "../services/fetchArt";
import { useState, useEffect } from "react";

export default function PopularArtResults() {
  // const [popArt, setPopArt] = useState("");
  const [popArt, setPopArt] = useState([]);

  const fetchPopArtInfo = async () => {
    const data = await fetchPopularArt(
      "Metropolitan Museum of Art, New York, NY"
    );
    console.log(data?.objectIDs);
    setPopArt(data?.objectIDs);
  };

  useEffect(() => {
    fetchPopArtInfo();
  }, []);

  console.log(`${popArt} hello`);

  return (
    <div className="popular-art-view">
      {searchArt.map((art, index) => {
        return (
          <div>
            <PopularArtCollection {...art} key={index} />
          </div>
        );
      })}
    </div>
  );
}
