import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [
        { name: "frankenstein", id: "asd1" },
        { name: "dracula", id: "asd2" },
        { name: "zombie", id: "asd3" },
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
    const { monsters } = this.state;
    return (
      <div className="App">
        {monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
