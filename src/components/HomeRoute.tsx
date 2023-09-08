import { useEffect, useState } from "react";
import Shoutout from "../models/Shoutout";
import "./HomeRoute.css";
import List from "./List";
import {
  addShoutout,
  deleteShoutout,
  getShoutouts,
} from "../services/shoutoutService";
import Form from "./Form";

const HomeRoute = () => {
  const [shoutouts, setShoutouts] = useState<Shoutout[]>([]);

  const loadShoutoutsHandler = async (): Promise<void> => {
    setShoutouts(await getShoutouts());
  };

  const deleteShoutoutHandler = async (id: string): Promise<void> => {
    await deleteShoutout(id);
    loadShoutoutsHandler();
  };

  useEffect(() => {
    (async () => {
      loadShoutoutsHandler();
    })();
  }, []);

  const addShoutoutHandler = async (shoutout: Shoutout): Promise<void> => {
    await addShoutout(shoutout);
    loadShoutoutsHandler();
  };

  return (
    <div className="HomeRoute">
      <h1>All Shout Outs</h1>
      <List
        shoutouts={shoutouts}
        deleteShoutoutHandler={deleteShoutoutHandler}
      />
      <Form addShoutoutHandler={addShoutoutHandler} />
    </div>
  );
};

export default HomeRoute;
