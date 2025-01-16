import { useContext } from "react";
import { HobbyContext } from "./HobbyContextProvider";

export default function AddHobbyComp(props) {
  const {AddHobby} = useContext(HobbyContext);

  const btnAddRandHobby=()=>{
    let x = Math.floor((Math.random() * 100) + 1);
    AddHobby('hob' + x,  x);
  }

  return (
    <div>AddHobby <br />
    <button onClick={btnAddRandHobby}>Add Random Hobby</button>
    </div>
  )
}
