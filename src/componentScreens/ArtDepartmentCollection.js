import { useState, useEffect } from "react";
import { fetchArtByObjectID } from "../services/fetchArt";
import { NavLink } from "react-router-dom";

export default function ArtDepartmentCollection(props) {
  const [deptArtPiece, setDeptArtPiece] = useState([]);

  const deptObjects = props.location.state.deptObj;
  console.log(`These are the Objects: ${deptObjects}`);

  const objectIDs = deptObjects.map((i) => {
    return [i];
  });

  console.log(`These are the IDs: ${objectIDs}`);

  const fetchDeptArtInfo = async () => {
    const data = await fetchArtByObjectID(objectIDs);
    setDeptArtPiece(data);
    console.log(data);
  };

  useEffect(() => {
    fetchDeptArtInfo();
  }, []);

  return (
    <div className="department-art">
      <h1>{props.location.state.deptName}</h1>

      <img src={deptArtPiece?.primaryImageSmall} alt="" />
      <h3>{deptArtPiece?.title}</h3>
      <h5>{deptArtPiece?.artistDisplayName}</h5>
      <NavLink
        to={{
          pathname: "/art/artDetail",
          state: deptArtPiece
            ? {
                image: deptArtPiece.primaryImage,
                name: deptArtPiece.title,
                culture: deptArtPiece.culture,
                artist: deptArtPiece.artistDisplayName,
                startDate: deptArtPiece.objectBeginDate,
                endDate: deptArtPiece.objectEndDate,
                medium: deptArtPiece.medium,
                dimensions: deptArtPiece.dimensions,
                department: deptArtPiece.department,
                repository: deptArtPiece.repository,
                URL: deptArtPiece.objectURL,
                galleryNumber: deptArtPiece.GalleryNumber,
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
