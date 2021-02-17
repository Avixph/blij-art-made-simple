import { useState, useEffect } from "react";
import { fetchArtByObjectIDForDept } from "../services/fetchArt";
import { NavLink } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import "../css/departmentArt.css";
export default function ArtDepartmentCollection(props) {
  const [deptArtPieces, setDeptArtPieces] = useState([]);

  const objectIDs = props.location.state.deptObj;

  const [page, setPage] = useState(1);

  const fetchDeptArtInfo = async () => {
    const data = await fetchArtByObjectIDForDept(objectIDs);
    setDeptArtPieces(data);
  };
  useEffect(() => {
    fetchDeptArtInfo();
  }, []);

  return (
    <div className="department-art">
      <h1>{props.location.state.deptName}</h1>
      <div
        className="scrollableDiv3"
        style={{
          height: 490,
          width: 585,
          overflow: "auto",
          display: "flex",
          flexDirection: "column-reverse",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        <InfiniteScroll
          dataLength={deptArtPieces.length}
          next={() => setPage(page + 1)}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          className="infintie_scroll"
          pullDownToRefreshThreshold={50}
          scrollableTarget="scrollableDiv3"
        >
          {deptArtPieces.map((piece) => {
            const deptArt = piece.data;
            return (
              <div className="dept_info">
                <img
                  className="dept_img_1"
                  src={deptArt?.primaryImageSmall}
                  alt=""
                />
                <h3 className="title_dept_1">{deptArt?.title}</h3>
                <h5 className="para_dept_1">{deptArt?.artistDisplayName}</h5>
                <NavLink
                  to={{
                    pathname: "/art/artDetail",
                    state: deptArt
                      ? {
                          image: deptArt.primaryImage,
                          name: deptArt.title,
                          culture: deptArt.culture,
                          artist: deptArt.artistDisplayName,
                          startDate: deptArt.objectBeginDate,
                          endDate: deptArt.objectEndDate,
                          medium: deptArt.medium,
                          dimensions: deptArt.dimensions,
                          department: deptArt.department,
                          repository: deptArt.repository,
                          link: deptArt.objectURL,
                          galleryNumber: deptArt.GalleryNumber,
                        }
                      : {},
                  }}
                >
                  <button type="button" className="dept-c-bttn">
                    View <br /> Details
                  </button>
                </NavLink>
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
}
