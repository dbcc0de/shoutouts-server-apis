import { Link } from "react-router-dom";
import Shoutout from "../models/Shoutout";
import "./Card.css";

interface Props {
  shoutout: Shoutout;
  deleteShoutoutHandler: (id: string) => void;
}

const Card = ({ shoutout, deleteShoutoutHandler }: Props) => {
  return (
    <li className="Card">
      <h2>
        Shout out to{" "}
        <Link to={`/user/${encodeURIComponent(shoutout.to)}`}>
          {shoutout.to}
        </Link>
      </h2>
      <p>
        - from{" "}
        <Link to={`/user/${encodeURIComponent(shoutout.from)}`}>
          {shoutout.from}
        </Link>
      </p>
      <p className="cardText">{shoutout.text}</p>
      <button onClick={() => deleteShoutoutHandler(shoutout._id!)}>X</button>
    </li>
  );
};

export default Card;
