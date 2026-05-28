import Department from './Department.jsx'
export default function College({ college }) {
  return (
    <div style={{ border: '2px solid #ccc', margin: '20px', padding: '20px' }} className="college">
      <h2>College Name: {college.name}</h2>
      <a href={college.website} target="_blank" rel="noopener noreferrer">
        Visit Website
      </a>
      {college.departments.map((department, deptIndex) => (
        <Department
          key={deptIndex}
          department={department}
          index={deptIndex}
        />
      ))}
    </div>
  );
}   