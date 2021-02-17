import { NavLink } from "react-router-dom";
import logo from "../images/logos/blij-logo.svg";
// import "../css/header.css";
export default function Header() {
  return (
    <header className="Navlink">
      <div className="slogan">
        <p>Art Made Simple</p>
      </div>
      <div className="bckgrnd_red_box">
        <img src={logo} alt="" />
      </div>

      <nav>
        <ul>
          <li>
            <NavLink exact to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/art"}>Art</NavLink>
          </li>
          <li>
            <NavLink to={"/aboutUs"}>About Us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
