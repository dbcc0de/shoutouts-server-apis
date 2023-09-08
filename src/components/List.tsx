import { useEffect, useState } from "react";
import Card from "./Card";
import "./List.css";
import Shoutout from "../models/Shoutout";

interface Props {
  shoutouts: Shoutout[];
  deleteShoutoutHandler: (id: string) => void;
}

const List = ({ shoutouts, deleteShoutoutHandler }: Props) => {
  //   const [shoutouts, setShoutouts] = useState<Shoutout[]>([]);

  //   const loadShoutoutsHandler = async (): Promise<void> => {
  //     setShoutouts(await getShoutouts());
  //   };

  //   const addShoutoutHandler = async (shoutout: Shoutout): Promise<void> => {
  //     await addShoutout(shoutout);
  //     loadShoutoutsHandler();
  //   };

  //   useEffect(() => {
  //     (async () => {
  //       loadShoutoutsHandler();
  //     })();
  //   }, []);

  return (
    <ul className="List">
      {shoutouts.map((item) => (
        <Card
          shoutout={item}
          key={item._id}
          deleteShoutoutHandler={deleteShoutoutHandler}
        />
      ))}
    </ul>
  );
};

export default List;
