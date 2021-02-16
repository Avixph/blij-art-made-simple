import { fetchPopularArt } from "../services/fetchArt";
import { useState, useEffect } from "react";

export default function PopularArtResults({ showPopArt, setShowPopArt }) {
  const [popArt, setPopArt] = useState("");

  const fetchPopArtInfo = async () => {
    const data = await fetchPopularArt(popArt);
    console.log(data.objectIDs);

    setPopArt(data.objectIDs);
    setShowPopArt([...showPopArt, data]);
  };

  console.log(showPopArt);

  useEffect(() => {
    fetchPopArtInfo();
  }, []);

  console.log(`${popArt} hello`);

  return <div className="popular-art-view">{fetchPopArtInfo}</div>;
}
