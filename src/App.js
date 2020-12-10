import React from "react";
import logo from "./logo.svg";
import "./App.css";
import One from "./components/One";
import { connect } from "react-redux";
import { Component } from "react";

// function App(props) {
//   return (
//     <div className="App">
//       <One widget={props.widgets[0]} />
//     </div>
//   );
// }

const mapStateToProps = (state) => {
  return {
    widgets: state.widgets,
  };
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <One widget={this.props.widgets[0]} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
