
export default function FCCar(props) {

  //props.speed = 500;
  let ownerName = "...";

  function cngOwner(e) {
    ownerName = e.target.value
    console.log(e.target.value);
  }

  function btnSayHello() {
    ownerName = 'Hello ' + ownerName;
    console.log(ownerName);    
    //run line 23-35 run return FCCAr() //ERROR RERENDER
  }

  if (200 < props.speed) {
    return (
      <h1 style={{ color: 'red' }}>DANGER</h1>
    );
  }

  return (
    <div style={{
      color: 'purple', margin: 10, padding: 10,
      border: '5px dotted green'
    }}>
      license plate = {props.lp} <br />
      model = {props.model} <br />
      speed = {props.speed} <br />
      owner: <input type="text" onChange={cngOwner} /> <br /> <br />
      <button onClick={btnSayHello}>Say Hello</button> <br />
      ownerName= {ownerName}
    </div>
  );
}