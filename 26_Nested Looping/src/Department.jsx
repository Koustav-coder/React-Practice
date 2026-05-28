import Course from './Course.jsx'

const Department = ({ department, index }) => {
  return (
    <div style={{ border: '2px solid #ccc', margin: '20px', padding: '20px' }} className="department">
      <h3>Department {index + 1}: {department.name}</h3>
      <ul>
        {department.courses.map((course, courseIndex) => (
          <Course
            key={courseIndex}
            course={course}
            index={courseIndex}
          />
        ))}
      </ul>
    </div>
  );
};

export default Department;