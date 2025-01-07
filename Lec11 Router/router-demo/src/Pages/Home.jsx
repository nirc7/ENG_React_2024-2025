import { useNavigate } from "react-router-dom"

export default function Home(props) {
  const navigate = useNavigate();

  const btnGo2UWD = () => {

    let userObj = {
      userId: 1,
      userName: "avi"
    };

    navigate('user', { state: userObj });
  }

  return (
    <div>Home <br />
      <button onClick={() => navigate('about')}>go 2 about</button> <br />
      <button onClick={btnGo2UWD}>go 2 user w Data</button>
    </div>
  )
}
