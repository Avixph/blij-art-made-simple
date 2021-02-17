import { useState, useEffect } from "react";
import { fetchArtByObjectID } from "../services/fetchArt";
import { NavLink } from "react-router-dom";

import "../css/artMain.css";
export default function ArtSearchResults({ objectIDs }) {
  const [artPiece, setArtPiece] = useState([]);

  const fetchArtInfo = async () => {
    const data = await fetchArtByObjectID(objectIDs);
    setArtPiece(data);
    console.log(data);
    console.log(artPiece);
  };

  useEffect(() => {
    fetchArtInfo();
  }, []);

  return (
    <div className="ArtSearch">
      <img className="artSearch_1" src={artPiece?.primaryImageSmall} alt="" />
      <h3 className="artSearch_2">{artPiece?.title}</h3>
      <h5 className="artSearch_3">{artPiece?.artistDisplayName}</h5>
      <NavLink
        to={{
          pathname: "/art/artDetail",
          state: artPiece
            ? {
                image: artPiece.primaryImage,
                name: artPiece.title,
                culture: artPiece.culture,
                artist: artPiece.artistDisplayName,
                startDate: artPiece.objectBeginDate,
                endDate: artPiece.objectEndDate,
                medium: artPiece.medium,
                dimensions: artPiece.dimensions,
                department: artPiece.department,
                repository: artPiece.repository,
                URL: artPiece.objectURL,
                galleryNumber: artPiece.GalleryNumber,
              }
            : {},
        }}
      >
        <button className="artSearch_bttn" type="button">
          View <br /> Details
        </button>
      </NavLink>
    </div>
  );
}
