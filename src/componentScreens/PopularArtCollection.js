import { fetchArtByObjectID } from "../services/fetchArt";
import { useState, useEffect } from "react";

export default function PopularArtCollection({ objectIDs }) {
  const [popArtPieces, setPopArtPieces] = useState([]);

  const fetchArtInfo = async () => {
    const data = await fetchArtByObjectID(objectIDs);
    setPopArtPieces(data);
    console.log(data);
    console.log(popArtPieces);
  };
  useEffect(() => {
    fetchArtInfo();
  }, []);

  return (
    <div className="popular-art">
      <img src={popArtPieces?.primaryImageSmall} alt="" />
      <h3>{popArtPieces?.title}</h3>
      <h5>{popArtPieces?.artistDisplayName}</h5>
    </div>
  );
}
