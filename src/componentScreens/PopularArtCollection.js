import { fetchArtByObjectID } from "../services/fetchArt";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../css/popArt.css";

export default function PopularArtCollection(props) {
  const [popArtPieces, setPopArtPieces] = useState([]);

  const objectIDs = props.objectIDs;
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
      <img
        className="popArt_img"
        src={popArtPieces?.primaryImageSmall}
        alt=""
      />

      <h3 className="popArt_title">{popArtPieces?.title}</h3>

      <h5 className="popArt_para">{popArtPieces?.artistDisplayName}</h5>

      <NavLink
        to={{
          pathname: "/art/artDetail",
          state: popArtPieces
            ? {
                image: popArtPieces.primaryImage,
                name: popArtPieces.title,
                culture: popArtPieces.culture,
                artist: popArtPieces.artistDisplayName,
                startDate: popArtPieces.objectBeginDate,
                endDate: popArtPieces.objectEndDate,
                medium: popArtPieces.medium,
                dimensions: popArtPieces.dimensions,
                department: popArtPieces.department,
                repository: popArtPieces.repository,
                URL: popArtPieces.objectURL,
                galleryNumber: popArtPieces.GalleryNumber,
              }
            : {},
        }}
      >
        <button className="popArt_bttn" type="button">
          View <br /> Details
        </button>
      </NavLink>
    </div>
  );
}
