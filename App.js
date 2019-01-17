import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Chalja from "./Components/Button/";

class App extends Component {
  state = {
    name: "abc",
    fName: "efg",
    isFlag: true
  };
  handleChange = e => {
    const { name } = e.target;
    console.log(this, e);
    this.setState({ [name]: e.target.value });
  };
  handleClick = val => {
    console.log("isFlag", this.state.isFlag, val);
    this.setState({ isFlag: !this.state.isFlag });
  };
  render() {
    //  console.log("imports",num1,name,val.num1,val.name)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>
            <input
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              name="fName"
              value={this.state.fName}
              onChange={this.handleChange}
            />
            <p>{this.state.name}</p>
            <p>{this.state.fName}</p>
          </div>
          
          <Chalja passValue={"helloworld"} getFlagVal={this.handleClick} />
        </header>
      </div>
    );
  }
}

export default App;
