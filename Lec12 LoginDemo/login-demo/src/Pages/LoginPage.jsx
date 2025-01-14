import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  let usersData = state;
  console.log(usersData);

  const [user, setUser] = useState({ email: null, password: null });
  const [showerr, setShowerr] = useState(false);

  const btnLogin = () => {
    let user2find = usersData.find(us => us.email === user.email && us.password === user.password);
    if (user2find !== undefined) {
      navigate('/home');
      setShowerr(false);
    }
    else {
      setShowerr(true);
    }
  }



  return (
    <div>
      <h2>Login Page</h2>
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

      {showerr && <div style={{ color: 'red' }}>ERROR email and password!</div>}
      <br />
      <button onClick={btnLogin}>Login</button> <br />

      <a href="" onClick={() => {

        console.log(usersData);

        navigate('/registration', { state: usersData });
      }} >not registred yet?...</a>
    </div>
  )
}
