import { useState, useEffect } from "react";
import { fetchArtByObjectIDForDept } from "../services/fetchArt";
import { NavLink } from "react-router-dom";
import lineParter from "../images/design_elements/line-parter.svg";

export default function ArtDepartmentCollection(props) {
  const [deptArtPieces, setDeptArtPieces] = useState([]);

  const objectIDs = props.location.state.deptObj;
  console.log(`These are the Objects: ${objectIDs}`);

  console.log(`These are the IDs: ${objectIDs}`);

  const fetchDeptArtInfo = async () => {

    const data = await fetchArtByObjectIDForDept(objectIDs);
    setDeptArtPieces(data);
    console.log(data);

  };

  useEffect(() => {
    fetchDeptArtInfo();
    console.log(`${fetchDeptArtInfo} hello 1`);
  }, []);

  return (
    <div className="department-art">
      <h1>{props.location.state.deptName}</h1>
      <img src={lineParter} alt="" />

      {deptArtPieces.map((piece) => {
        console.log(piece, `hello`);
        const deptArt = piece.data;
        return (
          <div>
            <img src={deptArt?.primaryImageSmall} alt="" />
            <h3>{deptArt?.title}</h3>
            <h5>{deptArt?.artistDisplayName}</h5>
            <NavLink
              to={{
                pathname: "/art/artDetail",
                state: deptArt
                  ? {
                      image: deptArt.primaryImage,
                      name: deptArt.title,
                      culture: deptArt.culture,
                      artist: deptArt.artistDisplayName,
                      startDate: deptArt.objectBeginDate,
                      endDate: deptArt.objectEndDate,
                      medium: deptArt.medium,
                      dimensions: deptArt.dimensions,
                      department: deptArt.department,
                      repository: deptArt.repository,
                      URL: deptArt.objectURL,
                      galleryNumber: deptArt.GalleryNumber,
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
      })}
    </div>
  );
}
