export default function ArtDetail(props) {
  return (
    <div className="art-details">
      <h2>Piece Detail</h2>
      <img src={props.location.state.image} alt="" />
      <h3>Title: {props.location.state.name}</h3>
      <h5>Artist: {props.location.state.artist}</h5>
      <p>Culture: {props.location.state.culture} </p>
      <p>
        {props.location.state.startDate} - {props.location.state.startDate}
      </p>
    </div>
  );
}
