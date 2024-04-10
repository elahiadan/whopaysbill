import React, { useContext } from "react";
import { MyContext } from "../context";

function Stage2() {
  const context = useContext(MyContext);

  return (
    <div>
      <h1 className="text-center">Who pays the Bill ?</h1>
      <h4 className="text-center">The Looser Name is :</h4>
      <h2 className="text-center text-success text-capitalize"> {context.state.result}</h2>

      <div className="mt-5 d-flex">
        <button className="action_button mx-2" onClick={() => context.next()}>
          New Looser
        </button>

        <button
          className="action_button btn_2"
          onClick={() => context.resetGame()}
        >
          New Game
        </button>
      </div>
    </div>
  );
}

export default Stage2;
