import React, { Component } from "react";
import RepoUnit from "./RepoUnit.jsx";
import axios from "axios";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "", //user search input val
      repos: [] //repositories respond from git api
    };
  }
  /*
  Gets the input from the search bar
*/
  onSearchInput = currentText => {
    this.setState({ searchText: currentText.currentTarget.value });
  };

  /*
    Gets the enter key press for the search bar. 
  */
  keyPress = e => {
    if (e.keyCode == 13) {
      this.onSearchRepo();
    }
  };

  /*
    api get request to git api
    response : git repositories from the api.

  */
  onSearchRepo = () => {
    axios
      .get(
        "https://api.github.com/search/repositories?q=" + this.state.searchText,
        {
          headers: {
            Accept: "application/json"
          },
          method: "GET"
        }
      )
      .then(response => {
        this.setState({ repos: response.data.items });
      });
  };

  render() {
    return (
      <React.Fragment>
        {/* Search Bar */}
        <div className="d-flex justify-content-center h-100 search-b">
          <div className="searchbar">
            <input
              className="search_input"
              type="text"
              name=""
              placeholder="Search git repo..."
              onChange={this.onSearchInput}
              onKeyDown={this.keyPress}
            ></input>
            <a onClick={this.onSearchRepo} className="search_icon">
              <i className="fas fa-search"></i>
            </a>
          </div>
        </div>
        <div>
          {/* Git Repositories */}
          {this.state.repos.map((item, i) => {
            return (
              <RepoUnit
                name={item.full_name}
                avatar={item.owner.avatar_url}
                key={i}
                repos={this.addToRepos}
                showSave={true}
              ></RepoUnit>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBar;
