import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchDepartments } from "../actions/deptActions";

const ArtDepartment = ({ dispatch, loading, artDept, pageError }) => {
  useEffect(() => {
    dispatch(fetchDepartments());
  }, [dispatch]);
};

const mapStateToProps = (state) => ({
  loading: state.artDept.loading,
  posts: state.artDept.artDept,
  pageError: state.artDept.pageError,
});
export default connect(mapStateToProps)(ArtDepartment);
