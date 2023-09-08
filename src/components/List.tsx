import { useEffect, useState } from "react";
import Card from "./Card";
import Form from "./Form";
import "./List.css";
import Shoutout from "../models/Shoutout";
import { addShoutout, getShoutouts } from "../services/shoutoutService";

const List = () => {
  const [shoutouts, setShoutouts] = useState<Shoutout[]>([]);

  const loadShoutoutsHandler = async (): Promise<void> => {
    setShoutouts(await getShoutouts());
  };

  const addShoutoutHandler = async (shoutout: Shoutout): Promise<void> => {
    await addShoutout(shoutout);
    loadShoutoutsHandler();
  };

  useEffect(() => {
    (async () => {
      loadShoutoutsHandler();
    })();
  }, []);

  return (
    <div className="List">
      <ul>
        {shoutouts.map((item) => (
          <Card shoutout={item} key={item._id} />
        ))}
      </ul>
      <Form addShoutoutHandler={addShoutoutHandler} />
    </div>
  );
};

export default List;
