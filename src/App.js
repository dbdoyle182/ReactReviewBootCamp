import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Props from './Props';

class App extends Component {

  // What to do if your function takes an argument but you want to control the context of this?
  myFuncArg = (argument) => () => {
    console.log(argument);
  }

  // or

  myFuncArgTwo = (argument) => {
    console.log(argument);
  }





  // Declaring a function in a component
  myFunc = () => {
    console.log("when")
  }

  render() {
    return (
      <div className="App">
        <Props propone={"what"} proptwo={"where"} propthree={this.myFunc} propfour={this.myFuncArg} propfive={this.myFuncArgTwo}/>
      </div>
    );
  }
}

export default App;
