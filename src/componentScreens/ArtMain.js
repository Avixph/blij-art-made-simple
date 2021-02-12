import { NavLink } from "react-router-dom";
// import { fetchDepartments } from "../actions/deptActions";
import { useDispatch } from "react-redux";
import ArtSearch from "../components/ArtSearch";

export default function ArtMain() {
  const dispatch = useDispatch();

  return (
    <main className="Art-Main">
      <NavLink to="/artDepartments" className="button">
        <button type="button">
          View <br /> Departments
        </button>
      </NavLink>
      <div>
        <ArtSearch />
      </div>
    </main>
  );
}
