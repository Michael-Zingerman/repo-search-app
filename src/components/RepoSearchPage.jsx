import React, { Component } from "react";
import SearchBar from "./SearchBar.jsx";

class RepoSearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <SearchBar />
      </React.Fragment>
    );
  }
}

export default RepoSearchPage;
