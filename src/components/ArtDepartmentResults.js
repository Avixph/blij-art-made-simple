import { fetchArtByDepartmentID } from "../services/fetchArt";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../css/artMain.css";
export default function ArtDepartmentResults({ displayName, departmentId }) {
  const [deptArt, setDeptArt] = useState([]);

  const fetchDeptArtInfo = async () => {
    const data = await fetchArtByDepartmentID(departmentId);
    console.log(data.objectIDs);
    setDeptArt(data?.objectIDs);
  };

  useEffect(() => {
    fetchDeptArtInfo();
  }, []);

  return (
    <div className="department-view">
      <NavLink
        to={{
          pathname: "/art/departmentCollection",

          state: { deptName: displayName, deptObj: deptArt },
        }}
        onClick={fetchDeptArtInfo}
        className="dept_button"
      >
        <button className="depts_bttn" type="button">
          {displayName}
        </button>
      </NavLink>
    </div>
  );
}
