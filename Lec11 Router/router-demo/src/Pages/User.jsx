import { useLocation } from "react-router-dom";

export default function User(props) {
  const { state } = useLocation();
  let userObj = state;

  return (
    <div>User <br />
      id = {userObj.userId} <br />
      name = {userObj.userName}
    </div>
  )
}
