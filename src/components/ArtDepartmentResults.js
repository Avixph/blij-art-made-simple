function ArtDepartmentResults({ data }) {
  return (
    <div className="department-view">
      <h2>department name:{data.departments.displayName}</h2>
    </div>
  );
}

export default ArtDepartmentResults;
