import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchArtSearch } from "../actions/srchActions";
import ArtSearchResults from "../components/ArtSearchResults";
const ArtSearch = ({ dispatch, loading, artSearch, pageError }) => {
  useEffect(() => {
    dispatch(fetchArtSearch());
  }, [dispatch]);
  const renderArtSearch = () => {
    if (loading) {
      return <p> Loading Search</p>;
    }
    if (pageError) {
      return <p> Error wrong way </p>;
    }
    return artSearch.map((search) => {
      return <ArtSearchResults key={search.objectIDs} {...search} />;
    });
  };
return (
    <div>
      <form>
        <input
          placeholder="Search for..."
          onChange={(event) => search.callback(event.target.value)}
        />
        <button onClick={renderArtSearch}>yer</button>
        {renderArtSearch()}
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.artSearch.loading,
  artSearch: state.artSearch.artSearch,
  pageError: state.artSearch.pageError,
});
export default connect(mapStateToProps)(ArtSearch);
