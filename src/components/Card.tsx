import Shoutout from "../models/Shoutout";
import "./Card.css";

interface Props {
  shoutout: Shoutout;
}

const Card = ({ shoutout }: Props) => {
  return (
    <li className="Card">
      <h2>Shout out to {shoutout.to}</h2>
      <p>- from {shoutout.from}</p>
      <p className="cardText">{shoutout.text}</p>
    </li>
  );
};

export default Card;
