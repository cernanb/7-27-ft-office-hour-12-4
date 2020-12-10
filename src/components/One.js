import React, { useState } from "react";
import Two from "./Two";
import {
  createWidget,
  otherAction,
  otherAction3,
} from "../redux/actions/widgetActions";
import { connect } from "react-redux";

class SomeComponent extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}

function One(props) {
  const [newWidget, setNewWidget] = useState("");

  const createWidget = (e) => {
    e.preventDefault();
    props.createWidget(newWidget);
  };

  return (
    <div>
      <h1>One</h1>
      <form onSubmit={(e) => createWidget(e)}>
        <label>Widget Name:</label>{" "}
        <input
          onChange={(e) => setNewWidget(e.target.value)}
          value={newWidget}
          type="text"
        />
        <input type="submit" value="Create" />
      </form>
      <h2>Widet Prop is equal to {props.widget.name}</h2>
      <Two />
    </div>
  );
}

// const ConnectedOneComponent = connect(null, { createWidget, otherAction, otherAction3 })(One)

export default connect(null, { createWidget })(One);
