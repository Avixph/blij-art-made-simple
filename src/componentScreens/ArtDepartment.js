import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchDepartments } from "../actions/deptActions";
import ArtDepartmentResults from "../components/ArtDepartmentResults";

const ArtDepartment = ({ dispatch, loading, artDept, pageError }) => {
  useEffect(() => {
    dispatch(fetchDepartments());
  }, [dispatch]);
  //put useState in
  const renderDepartments = () => {
    if (loading) {
      return <p>Loading Departmants...</p>;
    }
    if (pageError) {
      return artDept.map((artDepts, index) => {
        <ArtDepartmentResults {...artDepts} key={index} />;
      });
    }
  };

  return (
    <section>
      <h1>Department</h1>
      {renderDepartments()}
    </section>
  );
};

const mapStateToProps = (state) => ({
  loading: state.artDept.loading,
  artDept: state.artDept.artDept,
  pageError: state.artDept.pageError,
});
export default connect(mapStateToProps)(ArtDepartment);
