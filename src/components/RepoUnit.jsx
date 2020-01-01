import React, { Component } from "react";
import axios from "axios";
import { Button } from "reactstrap";
import Avatar from "react-avatar";

/**
  The repository unit represent unit of the git repo shown in the search result.
  the unit include the avatar of the user own the repo, the name of the repo and save btn.

 */
class RepoUnit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "", // The name of the repository
      Avatar: "", //The avatar picture of the repository user
      btnClass: "con-unit-rep", //the class of the repo unit. will change on select in order to hide the element when repo saved to vaforits
      btnSave:
        "item save-btn" /* the class of the save btn. will change on select in order to be shown or hide depending on the page: 
                                    Home page : when shown as a list of result the btn will appear as option of the repo unit 
                                    Favorit page : the btn will be disappear */
    };
  }

  /*
    Life hook - before the component mount get, get the name and the avatar of the repo unit/
   */
  componentWillMount() {
    this.setState({ Name: this.props.name });
    this.setState({ Avatar: this.props.avatar });
    //in case the user saved the repository unit, the unit will disappear from the list of repositories.
    if (this.props.showSave) {
      this.setState({ btnSave: "item save-btn" });
    } else {
      this.setState({ btnSave: "item save-btn save-btn-hide" });
    }
  }
  /*
    Save the repository in favorits
    get request to save the repositories in favorits list, using ASP session on server side
    result -> list of the favorits repos from the session.
   */
  saveRepo = () => {
    axios.defaults.withCredentials = true;

    axios
      .get("https://localhost:44384/Home/SaveRepositories", {
        params: {
          Name: this.state.Name,
          Avatar: this.state.Avatar
        }
      })
      .then(result => {
        console.log(result);
        this.setState({ btnClass: "con-unit-rep-hide" });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <React.Fragment>
        <div className={this.state.btnClass}>
          <div className="repo-unit container">
            <Avatar
              className="item"
              name={this.props.name}
              src={this.props.avatar}
              round={true}
              size="50"
            />
            <div className="item repo-name">{this.props.name}</div>
            <Button
              className={this.state.btnSave}
              color="primary"
              onClick={this.saveRepo}
            >
              Save Repository
            </Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RepoUnit;
