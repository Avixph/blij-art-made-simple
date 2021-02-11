import { NavLink } from "react-router-dom";
import { fetchDepartments } from "../actions/deptActions";
import { useDispatch } from "react-redux";

export default function ArtMain() {
  const dispatch = useDispatch();

  return (
    <main className="Art-Main">
      <h1>Angel</h1>
      {/* <NavLink to="/artDepartment" className="bttn">
        View Departments
  </NavLink>} */}
      <NavLink to="/artDepartments" className="button">
        yoooooooooooo
      </NavLink>

      <button onClick={() => dispatch(fetchDepartments())}>yoo</button>
    </main>
  );
}
