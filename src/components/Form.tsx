import { FormEvent, useState } from "react";
import Shoutout from "../models/Shoutout";
import "./Form.css";

interface Props {
  addShoutoutHandler: (shoutout: Shoutout) => void;
}

const Form = ({ addShoutoutHandler }: Props) => {
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!from) {
      addShoutoutHandler({ to, from: "Anonymous", text });
    } else {
      addShoutoutHandler({ to, from, text });
    }
    setTo("");
    setFrom("");
    setText("");
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <h2>Leave a Shout Out</h2>
      <label>
        To:
        <input required value={to} onChange={(e) => setTo(e.target.value)} />
      </label>
      <label>
        From:
        <input value={from} onChange={(e) => setFrom(e.target.value)} />
      </label>
      <label>
        Shout out:
        <textarea
          required
          rows={3}
          cols={50}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </label>
      <button>Submit Shout Out!</button>
    </form>
  );
};

export default Form;
