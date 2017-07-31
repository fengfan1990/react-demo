import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
        teams: {dallas: "go mavericks!!!🤠", newyork: 'GO KNICKS! 🏀'},
        cityName: '',
        numbers: []
      }
  }

  onPizza(event){
      this.setState({
        cityName: event.target.value.toLowerCase().replace(/\s/g,'')
      })
  }

  getNames(pizza){
    if(this.state.cityName === ''){
      return 'go ahead type a city'
    }else if (this.state.teams[pizza]) {
      return this.state.teams[pizza]
    } else {
      return 'NOT FOUND'
    }
  }

  submitNumber(e) {
    e.preventDefault();
    console.log('hi fan');
  }

  render() {
    return (
      <div className="App">
        <h1>What is your favorite city?</h1>
        <input type="text" onChange={(event) => this.onPizza(event)} />
        <p>{this.state.cityName} {this.getNames(this.state.cityName)}</p>
      <form onSubmit={(event) => this.submitNumber(event)}>
        <h1>wowowowwow formssss</h1>
        <input type="text"/>
        <input type="submit"/>
      </form>
      </div>
    );
  }
}

export default App;