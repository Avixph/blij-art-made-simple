export default function ArtDepartmentResults({ displayName, departmentId }) {
  return (
    <div className="department-view">
      <h3>department - {departmentId}</h3>
      <h2>{displayName}</h2>
    </div>
  );
}
