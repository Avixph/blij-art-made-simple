function ArtSearchResult(props) {
  const { objectIDs } = props;
  console.log(objectIDs);
  return (
    <div>
      <h1>{objectIDs}</h1>
    </div>
  );
}
export default ArtSearchResult;
