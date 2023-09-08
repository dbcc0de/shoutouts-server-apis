import { Link, useParams } from "react-router-dom";
import "./ShoutoutsByNameRoute.css";
import { useEffect, useState } from "react";
import Shoutout from "../models/Shoutout";
import {
  addShoutout,
  deleteShoutout,
  getShoutoutsByName,
} from "../services/shoutoutService";
import List from "./List";
import Form from "./Form";

const ShoutoutsByNameRoute = () => {
  const [shoutouts, setShoutouts] = useState<Shoutout[]>([]);
  const name: string | undefined = useParams().name;

  const loadShoutouts = async (): Promise<void> => {
    setShoutouts(await getShoutoutsByName(name!));
  };

  const addShoutoutHandler = async (shoutout: Shoutout): Promise<void> => {
    await addShoutout(shoutout);
  };

  const deleteShoutoutHandler = async (id: string): Promise<void> => {
    await deleteShoutout(id);
    loadShoutouts();
  };
  // I need to call a function that gets back shoutouts by name
  useEffect(() => {
    (async () => {
      loadShoutouts();
    })();
  }, [name]);

  return (
    <div className="ShoutoutsByNameRoute">
      <h1>Shoutouts for {name}</h1>
      <Link to="/">Back to All Shoutouts</Link>
      <List
        shoutouts={shoutouts}
        deleteShoutoutHandler={deleteShoutoutHandler}
      />
      <Form addShoutoutHandler={addShoutoutHandler} name={name} />
    </div>
  );
};

export default ShoutoutsByNameRoute;
