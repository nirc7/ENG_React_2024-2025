import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function RegistrationPage() {
  const [user, setUser] = useState({ email: null, password: null });
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);
  let usersData = state;
  console.log(usersData);



  useEffect(() => {
    if (users.length !== 0) {
      navigate('/', { state: users });
    }
  }, [users])


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
      <button onClick={() => {

        let newUsers = [user];
        if (usersData !== null) {
          newUsers = [...usersData, user];
        }
        console.log(newUsers);
        setUsers(newUsers);

      }}>Register</button> <br />
    </div>
  )
}
