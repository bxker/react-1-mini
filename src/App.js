import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      picture: '',
      name: '',
      displayName: ''
    } 
    this.updatePicture = this.updatePicture.bind(this);
    this.updateName = this.updateName.bind(this)
  }

  updatePicture(val){
    this.setState({picture: this.state.picture})
  }

  updateName(){
    this.setState({displayName: this.state.name})
  }

  render(){
    return (
      <div className="App">
        <span>Picture: </span><input onChange={this.updatePicture}></input>
        <span>Name: </span><input onChange={this.updateName}></input>
        <button>Add Friend</button>
      </div>
    );
  }
}

export default App;
