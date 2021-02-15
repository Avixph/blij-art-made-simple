import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDepartments } from "../actions/deptActions";
import ArtDepartmentResults from "./ArtDepartmentResults";

export default function ArtDepartment() {
  const dispatch = useDispatch();

  const { loading, artDept, pageError } = useSelector((state) => {
    return state.artDept;
  });

  useEffect(() => {
    dispatch(fetchDepartments());
  }, [dispatch]);

  const renderDepartments = () => {
    if (loading) {
      return <p>Loading Departments...</p>;
    }
    if (pageError) {
      return <p> errrrorrr wrong way </p>;
    }
    return artDept.map((dept) => {
      return <ArtDepartmentResults key={dept.departmentId} {...dept} />;
    });
  };

  return <section>{renderDepartments()}</section>;
}
