import React, { Component } from "react";
import Route from "react-router-dom/Route";
import Gitlogo from "../img/github.png";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import RepoSearchPage from "./RepoSearchPage.jsx";
import FavoririteRepos from "./FavoritsRepos.jsx";

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBarClass: "repo-search-bar"
    };
  }

  hideSearch = () => {
    this.setState({ searchBarClass: "repo-search-bar-hide" });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar className="nav-bar" bg="light" expand="lg">
          <Navbar.Brand>
            <img className="git-nav-icn" src={Gitlogo} alt={"logo"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Favorits">Favorites</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Router>
          <Route
            path="/"
            render={() => {
              return (
                <div className={this.state.searchBarClass}>
                  <RepoSearchPage />
                </div>
              );
            }}
          />
          <Route
            path="/Favorits"
            render={() => {
              return <FavoririteRepos oninit={this.hideSearch} />;
            }}
          />
        </Router>
      </React.Fragment>
    );
  }
}

export default MainApp;
