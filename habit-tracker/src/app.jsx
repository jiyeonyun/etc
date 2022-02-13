import './app.css';
import Habits from './components/habits';
import React, { Component } from 'react';
import Header from './components/header';
class App extends Component {
    state = {
    habits : [
        {id: 1, name : 'Reading' , count : 0},
        {id: 2, name : 'Running' , count : 0},
        {id: 3, name : 'Coding' , count : 0}
        ],
};
  render() {
    return (
      <div>
        <Header/>
        <Habits 
        habits={this.state.habits} />
      </div>
    );
  }
}

export default App;
