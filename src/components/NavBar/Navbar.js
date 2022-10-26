import React from 'react';
import { NavLink } from 'react-router-dom';
import Image from '../../image/attendit-4.png';
import './Navbar.css';

class Navbar extends React.Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav>
          <a href="/">
            <img src={Image} alt="AttendIt" width="170vh" />
          </a>

          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? '#navbar active' : '#navbar'}
            >
              <li>
              <NavLink to="/Sign_Up">Sign Up</NavLink>
              </li>

              <li>
              <NavLink to="/">Log In</NavLink>
              </li>
            </ul>
          </div>

          <div id="mobile" onClick={() => this.handleClick()}>
            <i
              id="bar"
              className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
