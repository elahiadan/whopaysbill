import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

import { MyContext } from "./context";
import Stage1 from "./components/stage_1";
import Stage2 from "./components/stage_2";

class App extends Component {
  static contextType = MyContext;
  render() {
    return (
      <div className="wrapper">
        <div className="center-wrapper">
          {this.context.state.stage === 1 ? <Stage1 /> : <Stage2 />}
        </div>
      </div>
    );
  }
}

export default App;
