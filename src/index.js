/**
 * Code refactoring
 * 1. Should remove clicked item within the list
 * 2. Should add a new random name into the list after clicked the blue button at bottom of the list
 */
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import "./styles.css";

// don't change this !!!
const list = [];
let times = 5;
while (times-- > 0) {
  list.push({
    id: faker.random.uuid(),
    title: faker.name.findName()
  });
}

class App extends React.Component {
  state = {
    list
  };

  handleRemovePerson = (index) => {
    const updatedList = this.state.list.filter((item, i) => i !== index);
    this.setState({ list: updatedList });
  };

  handleAddPerson = () => {
    const newPerson = {
      id: faker.random.uuid(),
      title: faker.name.findName()
    };
    this.setState(prevState => ({
      list: prevState.list.concat(newPerson)
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="list">
          {this.state.list.map((item, i) => (
            <div
              key={item.id}
              className="list_item"
              onClick={() => this.handleRemovePerson(i)}
            >
              {item.title}
            </div>
          ))}
          <div
            className="list_button"
            onClick={() =>this.handleAddPerson()}
          >
            add new person
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
