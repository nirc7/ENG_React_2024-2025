import { useParams } from "react-router-dom";

export default function MenuComponent(props) {
  const params = useParams();

  return (
    <div>MenuComponent <br />
      user id = {params.userId}
    </div>
  )
}
