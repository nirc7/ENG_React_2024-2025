import { useLocation, useNavigate } from "react-router-dom"


export default function HomePage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  let user = state;

  const btnLogout = () => {
    navigate('/');
  }

  return (
    <div>HomePage  <br />
      Hello email = {user.email} <br />
      <button onClick={btnLogout}>Logout</button>
    </div>
  )
}
