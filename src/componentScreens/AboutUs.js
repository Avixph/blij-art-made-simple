import angel from "../images/design_elements/angel.jpeg";
import jenn from "../images/design_elements/jenn.jpeg";
import github from "../images/logos/github-logo.svg";
import linkedin from "../images/logos/linkedin-logo.svg";
import "../css/aboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-us">
      <h1 className="title-au">Meet Team Blij</h1>

      <div className="team-members">
        <div className="angel">
          <img className="main1" src={angel} alt="" />
          <h5>Angel B. Fernandez</h5>
          <a href="https://www.linkedin.com/in/angelbienvenidofernandez/">
            <img className="link1" src={linkedin} alt="" />
          </a>
          <a href="https://github.com/Avixph">
            <img className="git1" src={github} alt="" />
          </a>
        </div>
        <div className="jenn">
          <img className="main" src={jenn} alt="" />
          <h5>Jennifer Smith</h5>
          <a href="https://www.linkedin.com/in/jennifer-smith-14a8361b7/">
            <img className="link" src={linkedin} alt="" />
          </a>
          <a href="https://github.com/JenniferSmith007">
            <img className="git" src={github} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
