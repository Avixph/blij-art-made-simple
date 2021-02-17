export default function ArtDetail(props) {
  return (
    <div className="art-details">
      <h2 className="title">Piece Detail</h2>
      <img src={props.location.state.image} alt="" />
      <h3 className="title">Title: {props.location.state.name}</h3>
      <div className="art-info">
        <h5 className="artist">Artist: {props.location.state.artist}</h5>
        <p className="dimensions">
          Dimensions: {props.location.state.dimensions}{" "}
        </p>
        <p className="culture">Culture: {props.location.state.culture} </p>
        <p className="creation-date">
          {props.location.state.startDate} - {props.location.state.startDate}
        </p>
        <p className="gallery"># {props.location.state.galleryNumber}</p>
        <p className="department">
          {props.location.state.department} Department
        </p>
        <p className="repository location">{props.location.state.repository}</p>

        <button>
          <a href={props.location.state.link}>More Info</a>
        </button>
      </div>
    </div>
  );
}
