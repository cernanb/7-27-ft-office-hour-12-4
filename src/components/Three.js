import React from "react";
import { connect } from "react-redux";

function Three(props) {
  console.log(props);
  return (
    <div>
      <h3>Three</h3>
      {props.widgets.map((widget) => (
        <div>
          <h3>{widget.name}</h3>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    widgets: state,
  };
};

export default connect(mapStateToProps)(Three);
