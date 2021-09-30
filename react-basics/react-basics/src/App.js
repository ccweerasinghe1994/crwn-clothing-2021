import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [
        { name: "frankenstein" },
        { name: "dracula" },
        { name: "zombie" },
      ],
    };
  }

  handleClick = () => {
    this.setState((state, props) => {
      return {
        string: "Hi Andrew",
      };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hi
          </a>
          <div></div>
          <button onClick={this.handleClick}>change name</button>
        </header>
      </div>
    );
  }
}

export default App;
