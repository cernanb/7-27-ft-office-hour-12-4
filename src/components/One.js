import React, { useState } from "react";
import Two from "./Two";
import { createWidget } from "../redux/actions/widgetActions";
import { connect } from "react-redux";

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
      <Two />
    </div>
  );
}

export default connect(null, { createWidget })(One);
