// import { NavLink } from "react-router-dom";
import { fetchDepartments } from "../actions/deptActions";
export default function ArtMain() {
  return (
    <main className="Art-Main">
      <h1>Angel</h1>
      {/* <NavLink to="/artDepartment" className="bttn">
        View Departments
  </NavLink>} */}
      <button onClick={fetchDepartments}>yoo</button>
    </main>
  );
}
