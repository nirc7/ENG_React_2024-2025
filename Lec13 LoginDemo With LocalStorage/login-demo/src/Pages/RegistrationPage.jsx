import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegistrationPage() {
  const [user, setUser] = useState({ email: null, password: null });
  const navigate = useNavigate();

  const btnRegister = () => {
    if (localStorage.users) {
      let usersData2 = [...JSON.parse(localStorage.users), user];
      let strUsers = JSON.stringify(usersData2);

      console.log(strUsers);

      localStorage.users = strUsers;
    } else {
      localStorage.users = JSON.stringify([user]);
    }
    navigate('/');
  }


  return (
    <div>
      <h2>Registration Page</h2>
      Email: <input type="text" onChange={e => {
        //opt1
        let newUser = { ...user, email: e.target.value };
        console.log(newUser);
        setUser(newUser);

        //opt2
        //setUser(prevUser => ({ ...prevUser, email: e.target.value }));
      }} /> <br />

      Pass: <input type="text" onChange={e => {
        //opt1
        let newUser = { ...user, password: e.target.value };
        console.log(newUser);
        setUser(newUser);
      }} /> <br /> <br />
      <button onClick={btnRegister}>Register</button> <br />
    </div>
  )
}
