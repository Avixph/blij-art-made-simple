import { NavLink } from "react-router-dom";
import logo from "../images/logos/blij-logo.svg";
export default function Header() {
  return (
    <header className="Navlink">
      <h1>
        <img src={logo} alt="" />
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink exact to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/ArtMain"}>Art</NavLink>
          </li>
          <li>
            <NavLink to={"/AboutUs"}>About Us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
