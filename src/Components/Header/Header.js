import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
export default class Header extends Component {
  render() {
    let classes = [
      "navbar",
      "navbar-expand-md",
      "navbar-dark",
      "menu",
      "shrink"
    ];
    return (
      <header>
        <nav className={classes.join(" ")}>
          <div className="container">
            <Link to="/" className="navbar-brand">
              Conta<i>cts</i>
            </Link>

            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className="nav-link"
                    activeStyle={{ color: "yellow" }}
                    exact
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/addcontact"
                    className="nav-link"
                    activeStyle={{ color: "yellow" }}
                  >
                    Add contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
