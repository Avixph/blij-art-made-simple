import { NavLink } from "react-router-dom";
import logo from "../images/logos/blij-logo.svg";
export default function Header() {
  return (
    <header className="Navlink">
      <h1>
        <img src={logo} alt="" />
      </h1>
      <nav>
        <NavLink exact to={"/"}>
          Home
        </NavLink>
        <NavLink to={"/ArtMain"}>Art</NavLink>
        <NavLink to={"/AboutUs"}>About Us</NavLink>
      </nav>
    </header>
  );
}
