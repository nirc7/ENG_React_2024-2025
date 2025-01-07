import { useNavigate } from "react-router-dom"

export default function About(props) {
  const navigate = useNavigate();
  return (
    <div>About <br />
      <button onClick={() => navigate('/')}>home</button>
    </div>
  )
}
