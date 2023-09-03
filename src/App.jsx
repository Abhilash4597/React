import { Component } from 'react';
import './App.css';
import { CardList } from './Components/Card-list/Card-list.component';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList monster={this.state.monsters} />
      </div>
    );
  }
}

export default App;
