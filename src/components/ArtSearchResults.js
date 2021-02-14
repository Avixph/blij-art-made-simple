import ArtSearchResult from "./ArtSearchResult";

function ArtSearchResults({ artSearchResult }) {
  console.log(artSearchResult);
  return (
    <div>
      <main>
        {artSearchResult.map((artSearchResult, i) => {
          return <ArtSearchResult key={`${i} searched`} {...artSearchResult} />;
        })}
      </main>
    </div>
  );
}
export default ArtSearchResults;
