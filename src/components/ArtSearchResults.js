import { useState, useEffect } from "react";
import { fetchArtByObjectID } from "../services/fetchArt";
import { NavLink } from "react-router-dom";

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
      <img src={artPiece?.primaryImageSmall} alt="" />
      <h3>{artPiece?.title}</h3>
      <h5>{artPiece?.artistDisplayName}</h5>
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
        <button type="button">
          View <br /> Details
        </button>
      </NavLink>
    </div>
  );
}
