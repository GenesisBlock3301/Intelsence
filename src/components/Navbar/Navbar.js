import React, { Component } from "react";
import NavbarStyles from "./Navbar.module.scss";

export default class Navbar extends Component {
  render() {
    return (
      <div className={NavbarStyles.container}>
        <div className={NavbarStyles.Navbar}>
          <div>
            <img
              src="/images/logo.svg"
              className={NavbarStyles.logo}
              alt="intensense.ai"
            />
          </div>
          <div>
            <ul className={NavbarStyles.NavItems}>
              <li>AI Solutions+</li>
              <li>Technologies+</li>
              {/* <li>Industries+</li>
              <li>Research+</li>
              <li>Blog+</li> */}
              <li>Case Studies+</li>
              <li>Careers+</li>
              <li>Contact+</li>
              <li>About Us+</li>
            </ul>
          </div>
          <div className={NavbarStyles.search}>
            <img
              src="images/search.svg"
              className={NavbarStyles.searchIcon}
              alt="search"
            />
            <input
              type="text"
              placeholder="Search"
              className={NavbarStyles.searchInput}
            />
          </div>
        </div>
      </div>
    );
  }
}
