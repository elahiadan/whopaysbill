import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    stage: 1,
    players: [],
    result: "",
  };

  addPlayerHandler = (name) => {
    if (this.state.players.indexOf(name) !== -1) {
        toast.error("player already exist", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
          });
    } else {
      this.setState((prevState) => ({
        players: [...prevState.players, name],
      }));
    }
  };

  removePlayerHandler = (index) => {
    let newArray = this.state.players;
    newArray.splice(index, 1);
    this.setState({ players: newArray });
  };

  nextHandler = () => {
    const { players } = this.state;
    if (players.length < 2) {
      toast.error("add more than 1 player", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    } else {
      this.setState(
        {
          stage: 2,
        },
        () => {
          setTimeout(() => {
            this.looserGenerator();
          }, 2000);
        }
      );
    }
  };

  looserGenerator = () => {
    let { players } = this.state;
    this.setState({
      result: players[Math.floor(Math.random() * players.length)],
    });
  };

  resetGame = () => {
    this.setState({
      stage: 1,
      players: [],
      result: "",
    });
  };

  render() {
    return (
      <>
        <MyContext.Provider
          value={{
            state: this.state,
            addPlayer: this.addPlayerHandler,
            removePlayer: this.removePlayerHandler,
            next: this.nextHandler,
            resetGame: this.resetGame,
          }}
        >
          {this.props.children}
        </MyContext.Provider>
        <ToastContainer />
      </>
    );
  }
}

export { MyContext, MyProvider };
