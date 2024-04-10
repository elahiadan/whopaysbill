import React, { useContext, useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { MyContext } from "../context";

function Stage1() {
  const textInput = useRef();
  const context = useContext(MyContext);
  const [error, setError] = useState([false, ""]);
  const handleSubmit = (event) => {
    event.preventDefault();

    const value = textInput.current.value;
    const validate = validateInput(value);

    if (validate) {
      setError([false, ""]);

      context.addPlayer(value);

      textInput.current.value = "";
    } else {
    }
  };

  const validateInput = (value) => {
    if (value === "") {
      setError([true, "player name is requered"]);
      return false;
    } else if (value.length <= 3) {
      setError([true, "more than 3 char required"]);
      return false;
    }
    return true;
  };

  return (
    <div>
      <h1>Who pays the Bill ?</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
          className="mb-2"
            type="text"
            placeholder="Player"
            name="player"
            ref={textInput}
          />
        </Form.Group>
        {error[0] ? <Alert variant="danger"> {error[1]}</Alert> : null}
        <Button className="miami mt-2" type="submit" variant="primary">
          Submit
        </Button>
      </Form>

      <div className="mt-5">
        {context.state.players && context.state.players.length > 0 ? (
            <>
            <h2>List of Players</h2>
            <hr />
            <ul className="list-group">
              {context.state.players.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-item-center list-group-item-action mt-1"
                  >
                    {item}
                    <span
                      className="badge badge-danger"
                      onClick={() => context.removePlayer(index)}
                    >
                      x
                    </span>
                  </li>
                );
              })}
            </ul>
            <button className="action_button mt-3" onClick={() => context.next()}>
              Find Looser
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Stage1;
