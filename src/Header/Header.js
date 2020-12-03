import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

class Header extends React.Component {
  state = {
    display: false,
  };

  toggleDiv = () => {
    this.setState({
      display: !this.state.display,
    });
  };

  render() {
    return (
      <div className="header">
        <div className="mobile-nav">
          <Link to="/">
            <h1>Pegasus Games</h1>
          </Link>
          <FaBars className="mobile-icon" onClick={this.toggleDiv} />
          {this.state.display ? (
            <ul className="header-ul">
              <Link to="/board-games">
                <li className="header-li">
                  <b>Board Games</b>
                </li>
              </Link>
              <Link to="magic">
                <li className="header-li">
                  <b>Magic</b>
                </li>
              </Link>
              <Link to="rpg">
                <li className="header-li">
                  <b>RPG</b>
                </li>
              </Link>
              <Link to="about">
                <li className="header-li">
                  <b>About</b>
                </li>
              </Link>
            </ul>
          ) : null}
        </div>
        <div className="browser-nav">
          <Link to="/">
            <h1>Pegasus Games</h1>
          </Link>

          <ul className="header-ul">
            <Link to="/board-games">
              <li className="header-li">
                <b>Board Games</b>
              </li>
            </Link>
            <Link to="magic">
              <li className="header-li">
                <b>Magic</b>
              </li>
            </Link>
            <Link to="rpg">
              <li className="header-li">
                <b>RPG</b>
              </li>
            </Link>
            <Link to="about">
              <li className="header-li">
                <b>About</b>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;

// OK, one pure CSS solution would be like this, you create two menus, one is for large screen and the other one is for smaller screen. For large screen size, the media query can just always show the large one, and hide the small one. For small screen size, the media query can always hide the large one and allow your current logic to work with the smaller screen.
