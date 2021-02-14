import { useState, useEffect } from "react";
import { fetchArtByQuery } from "../services/fetchArt";
import { NavLink } from "react-router-dom";

export default function ArtSearchResults({ data }) {
  const [artPiece, setArtPiece] = useState(undefined);

  const fetchArtInfo = async () => {
    const data = await fetchArtByQuery();
    setArtPiece(data.data);
    console.log(data);
  };
  useEffect(() => {
    fetchArtInfo();
  }, []);

  return (
    <div className="ArtSearch">
      {/* <img
        src={artPiece.primaryImage ? artPiece.primaryImage : "no Image"}
        alt=""
      /> <img src={searchArt} alt="" />
      <h3>{searchArt.objectName}</h3>
      <h5>{artPiece.artistDisplayName}</h5>*/}

      <NavLink
        to={{
          pathname: "/artDetail",
          state: {
            image: artPiece.primaryImage,
            name: artPiece.objectName,
            artist: artPiece.artistDisplayName,
            startDate: artPiece.objectBeginDate,
            endDate: artPiece.objectEndDate,
            medium: artPiece.medium,
            dimensions: artPiece.dimensions,
            department: artPiece.department,
            repository: artPiece.repository,
            URL: artPiece.objectURL,
            galleryNumber: artPiece.GalleryNumber,
          },
        }}
      ></NavLink>
      <button type="button">
        View <br /> Details
      </button>
    </div>
  );
}
