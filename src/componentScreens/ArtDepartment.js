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
      return <p> errrrorrr wrong way </p>;
    }
    return artDept.map((data, index) => {
      return <ArtDepartmentResults key={index} data={data} />;
    });
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
