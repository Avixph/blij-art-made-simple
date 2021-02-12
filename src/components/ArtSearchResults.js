import { useState, useEffect } from "react";
import { fetchArtByObjectID } from "../services/fetchArt";
import { NavLink } from "react-router-dom";

export default function ArtSearchResults({ objectIDs }) {
  const [artPiece, setArtPiece] = useState(undefined);

  const fetchArtInfo = async () => {
    const data = await fetchArtByObjectID();
    setArtPiece(data);
    console.log(data);
  };
  useEffect(() => {
    fetchArtInfo();
  }, []);

  return (
    <div className="ArtSearch">
      <img
        src={artPiece.primaryImage ? artPiece.primaryImage : "no Image"}
        alt=""
      />
      <h3>{artPiece.objectName}</h3>
      <h5>{artPiece.artistDisplayName}</h5>
      <h5>
        {artPiece.objectBeginDate} - {artPiece.objectEndDate}
      </h5>
      <NavLink
        to={{
          pathname: "/artDetail",
          state: {
            image: artPiece.primaryImage,
            name: artPiece.objectName,
            artist: artPiece.artistDisplayName,
          },
        }}
      >
        <button type="button">
          View <br /> Details
        </button>
      </NavLink>
    </div>
  );
}
