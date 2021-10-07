import "./App.css";
import React from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState((state) => {
          return {
            monsters: users,
          };
        })
      );
  }
  handleClick = () => {
    this.setState({
      string: "Hi Andrew",
    });
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState((state) => {
      return {
        searchField: value,
      };
    });
  };
  render() {
    const { monsters, searchField } = this.state;

    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder={"search your monster"}
          handleChange={this.handleChange}
        />

        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
