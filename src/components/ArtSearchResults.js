import { useState, useEffect } from "react";
import { fetchArtByObjectID } from "../services/fetchArt";
import { NavLink } from "react-router-dom";

export default function ArtSearchResults({ objectIDs }) {
  const [artPiece, setArtPiece] = useState(undefined);

  const fetchArtInfo = async () => {
    const 
    const data = await fetchArtByObjectID();
    setArtPiece(data);
    console.log(data);
  };
  useEffect(() => {
    fetchArtInfo();
  }, []);
  return (
    <div className="ArtSearch">
      <h3>{objectIDs.artPiece.objectName}</h3>
      <h5>{objectIDs.artPiece.artistDisplayName}</h5>
      <img
        src={
          objectIDs.artPiece.primaryImage ? artPiece.primaryImage : "no Image"
        }
        alt=""
      />
    </div>
  );
}
