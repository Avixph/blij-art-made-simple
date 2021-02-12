import { NavLink } from "react-router-dom";
// import { fetchDepartments } from "../actions/deptActions";
import { useDispatch } from "react-redux";
import { fetchArtSearch } from "../actions/searchActions";
import { getArtSearchSuccess } from "../actions/searchActions";

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
        <br></br>
        <input
          className="inputbar"
          onChange={(event) => {
            getArtSearchSuccess(event.target.value);
            console.log(event.target.value);
          }}
        ></input>
        <button className="searched" onClick={fetchArtSearch}>
          Search Art
        </button>
      </div>
    </main>
  );
}
