import React from "react";
import { connect } from "react-redux";
import { getGithubUser } from "../redux/actions/githubActions";

class Three extends React.Component {
  state = {
    username: "",
  };
  componentDidMount() {}

  submit = () => {
    this.props.getGithubUser(this.state.username);
    this.setState({ username: "" });
  };
  render() {
    if (!this.props.githubUsers.length === 0) {
      return <h1>Loading....</h1>;
    }
    return (
      <div>
        <input
          type="text"
          value={this.state.username}
          onChange={(e) => this.setState({ username: e.target.value })}
        />
        <button onClick={this.submit}>Get User Info</button>
        <h3>Github Users</h3>
        {this.props.githubUsers.map((user) => {
          return <div>{user.login}</div>;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    githubUsers: state.github.users,
  };
};

export default connect(mapStateToProps, { getGithubUser })(Three);
