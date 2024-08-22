/* eslint-disable react/prop-types */
import React, { Component } from "react";

const list = [
  "Yes",
  "No",
  "Maybe",
  "Not sure..try again",
  "Ask a friend",
  "Call the police",
];

const MyContext = React.createContext();
class MyProvider extends Component {
  state = {
    screen: 0,
    question: "",
    result: ""
  };

  handleGoTo = (value) => {
    this.setState({ screen: value });
  };

  handleQuestion = (value) => {
    this.setState({ question: value });
  };

  getRandomValue = () => {
    return list[Math.floor(Math.random() * list.length)];
  }
  handleResult = () => {
    let random = this.getRandomValue();
    if(this.state.result !== ''){
        while(this.state.result === random){
            random = this.getRandomValue();
        }
    }
    this.setState({result: random})
  }

  handleReset= () => {
    this.setState({screen: 0, question: "", result: ""})
  }

  render() {
    return (
      <>
        <MyContext.Provider
          value={{
            state: this.state,
            goTo: this.handleGoTo,
            question: this.handleQuestion,
            result: this.handleResult,
            reset: this.handleReset,
          }}
        >
          {this.props.children}
        </MyContext.Provider>
      </>
    );
  }
}

export { MyProvider, MyContext };
