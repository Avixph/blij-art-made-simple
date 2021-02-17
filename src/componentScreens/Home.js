import "../css/popArt.css";

import PopularArtResults from "../components/PopularArtResults";
import banner from "../images/design_elements/home-banner.svg";

export default function Home() {
  return (
    <div>
      <img src={banner} alt="home banner" className="banner" />

      <PopularArtResults />
    </div>
  );
}
