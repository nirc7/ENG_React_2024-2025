

export default function FCInputs(props) {

  let id;
  let name = null;

  const chgID = (e) => {
    id = Number(e.target.value);
  }

  const chgName = (e) => {
    name = e.target.value;
  }

  const btnAddStudent = () => {
    props.sendStudent2HP(id, name);
  }


  return (
    <div style={{ border: '2px dashed orange', margin: 10, padding: 10 }}>FCInputs <br />
      ID:<input type="text" onChange={(chgID)} /> <br />
      Name:<input type="text" onChange={chgName} /> <br />
      <button onClick={btnAddStudent}>Add Student</button>
    </div>
  )
}
