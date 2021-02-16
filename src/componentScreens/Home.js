import PopularArtDetail from "./PopularArtDetail";
// import { useState, useEffect } from "react";
// import PopularArtCollection from "./PopularArtCollection";
import lineParter from "../images/design_elements/line-parter.svg";

export default function Home() {

  // const [showPopArt, setShowPopArt] = useState([]);

  // const fetchPopArt = async () => {
  //   const data = await fetchPopularArt(
  //     "Metropolitan Museum of Art, New York, NY"
  //   );
  //   console.log([data]);
  //   setShowPopArt([data]);
  // };
  // useEffect(() => {
  //   fetchPopArt();
  // }, []);

  return (
    <div>
      <h1>Hello World!</h1>
      <h3>Popular Peices</h3>
      <h5>explore peices on view</h5>
      <PopularArtDetail />
      {/* <PopularArtDetail showPopArt={showPopArt} setShowPopArt={setShowPopArt} />
      {showPopArt.map((art, index) => {
        return (
          <div>
            <PopularArtCollection {...art} key={index} />
          </div>
        );
      })} */}
      <img src={lineParter} alt="" />
    </div>
  );

}
