import React from 'react'

export default function FCStudentsList(props) {

  
  let studentsStr = props.students.map(stu =>
    <div key={stu.id}
      style={{ border: '1px dotted blue', margin: 5, padding: 5 }}
    >id={stu.id} name={stu.name}</div>
  );

  return (
    <div style={{ border: '2px dashed red', margin: 10, padding: 10 }}>
      <h3>Students List:</h3>
      {studentsStr}
    </div>
  )
}
