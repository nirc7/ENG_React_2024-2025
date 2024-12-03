
export default function FCPerson(props) {

  //props.id=9; //ERROR

  if (5 < props.id) {
    return (
      <div>less 5</div>
    );
  }


  return (
    <div style={{
      margin: 5, padding: 5,
      border: '2px solid green', borderRadius: 10
    }} >
      <div>fistl ine</div>
      <div>FCPrerons <br />
        id= {props.id}<br />
        name= {props.name}<br />
      </div>
    </div>
  );
}