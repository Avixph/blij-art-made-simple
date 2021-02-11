function ArtDepartmentResults({ displayName, departmentId }) {
  return (
    <div className="department-view">
      <h3>department #: {departmentId}</h3>
      <h2>department name:{displayName}</h2>
    </div>
  );
}

export default ArtDepartmentResults;
