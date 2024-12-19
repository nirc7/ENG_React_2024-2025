import React from 'react'

export default function FCStudentsList(props) {

  const btnDeleteStudent = (id) => {
    console.log(id);
    props.sendStudnet2Del(id);
  }

  const btnDeleteStudent2 = (e) => {
    console.log(e.currentTarget.dataset.stuid);
    //console.log(e.target.dataset.stuid);
  }

  let studentsStr = props.students.map(stu =>
    <div key={stu.id}
      style={{ border: '1px dotted blue', margin: 5, padding: 5 }}
    >id={stu.id} name={stu.name} <a href='#' onClick={() => btnDeleteStudent(stu.id)} >
        <svg color='red' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
        </svg> </a>

      <a href='#' onClick={btnDeleteStudent2} data-stuid={stu.id} >
        <svg color='red' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
        </svg> </a>

    </div>
  );

  return (
    <div style={{ border: '2px dashed red', margin: 10, padding: 10 }}>
      <h3>Students List:</h3>
      {studentsStr}
    </div>
  )
}
