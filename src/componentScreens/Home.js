// import { useState, useEffect } from "react";

// import PopularArtCollection from "./PopularArtCollection";
// import { fetchPopularArt } from "../services/fetchArt";
import lineParter from "../images/design_elements/line-parter.svg";
import PopularArtResults from "../components/PopularArtResults";

export default function Home() {
  return (
    <div>
      <h1>Art Made Simple</h1>
      <h3>Popular Peices</h3>
      <h5>explore peices on view</h5>
      <img src={lineParter} alt="" />
      <PopularArtResults />
    </div>
  );
}
