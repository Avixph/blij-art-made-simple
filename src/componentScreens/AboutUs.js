import angel from "../images/design_elements/angel.jpeg";
import jenn from "../images/design_elements/jenn.jpeg";
import github from "../images/logos/github-logo.svg";
import linkedin from "../images/logos/linkedin-logo.svg";

export default function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend
        vestibulum lacus, id tincidunt sem congue id. Donec a lacus finibus,
        condimentum risus pretium, dignissim risus. Proin tincidunt gravida est
        vitae dapibus. Pellentesque aliquam, massa sodales suscipit bibendum,
        diam nunc porttitor risus, ac porttitor urna diam a justo. Nulla
        scelerisque fermentum laoreet. In ipsum ipsum, semper id fringilla
        vitae, tempus nec tortor. Nam quis odio eros. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Proin blandit ligula sed mauris mattis, sed venenatis felis cursus.
        Fusce varius porttitor mi, ac iaculis nunc. Fusce sit amet diam a nunc
        sagittis tincidunt cursus ac erat. Donec et mollis eros. Vestibulum
        eleifend, sapien vitae congue tincidunt, enim eros tincidunt ipsum,
        tincidunt tempor augue eros quis lorem. Nam nec urna pretium, accumsan
        lectus id, sagittis ante. Vestibulum vitae mi consectetur, dictum elit
        bibendum, egestas augue. In a tortor arcu. In felis sem, commodo eget
        enim sed, vestibulum consequat lectus.
      </p>

      <h3>Team Blij</h3>
      <div className="team-members">
        <div className="angel">
          <img src={angel} alt="" />
          <a href="https://www.linkedin.com/in/angelbienvenidofernandez/">
            <img src={linkedin} alt="" />
          </a>
          <a href="https://github.com/Avixph">
            <img src={github} alt="" />
          </a>
        </div>
        <div className="jenn">
          <img src={jenn} alt="" />
          <a href="https://www.linkedin.com/in/jennifer-smith-14a8361b7/">
            <img src={linkedin} alt="" />
          </a>
          <a href="https://github.com/JenniferSmith007">
            <img src={github} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
