import React, { Component } from "react";
import axios from "axios";
import RepoUnit from "./RepoUnit.jsx";

class FavoritsRepos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }
  componentWillMount() {
    this.props.oninit();

    axios.defaults.withCredentials = true;

    axios
      .get("https://localhost:44384/Home/GetFavoritsRepositories", {
        params: {
          Name: this.state.Name,
          Avatar: this.state.Avatar
        }
      })
      .then(result => {
        console.log(result);
        this.setState({ repos: result.data });
      })
      .catch(err => {
        // Do somthing
      });
  }
  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.repos.map((item, i) => {
            return (
              <RepoUnit
                name={item.Name}
                avatar={item.Avatar}
                key={i}
                repos={this.addToRepos}
                showSave={false}
              ></RepoUnit>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default FavoritsRepos;
