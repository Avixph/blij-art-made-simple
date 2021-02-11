function ArtDepartmentResults({ artDepts }) {
  console.log(artDepts);
  return (
    <div className="department-view">
      <h1>department #:{artDepts.departmentId}</h1>
      <h2>department name:{artDepts.displayName}</h2>
    </div>
  );
}

export default ArtDepartmentResults;
