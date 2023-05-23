import { Component } from "react";

class Monster extends Component {
  constructor() {
    super();
    // The component's initial state is an empty array for 'monsters' and an empty string for 'searchField'
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    // Fetches a list of users from the JSONPlaceholder API and sets the state of 'monsters' to the returned array of users
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    // Updates the state of 'searchField' to the entered text value
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };
  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    // Creates a new array of 'filteredMonsters' by filtering the 'monsters' array based on whether the 'searchField' value is included in the monster's name (case insensitive)
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    // Returns the component's UI with a search input field and a list of monster names that are filtered based on the current value of 'searchField'
    return (
      <div>
        <div>
          <input
            type="search"
            className="search-box"
            placeholder="search monsters"
            onChange={onSearchChange}
          />
          {/* Maps over the 'filteredMonsters' array to display each monster name in an HTML 'h1' tag */}
          {filteredMonsters.map((monster, index) => {
            return (
              <div key={index}>
                <h1>{monster.name}</h1>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Monster;
