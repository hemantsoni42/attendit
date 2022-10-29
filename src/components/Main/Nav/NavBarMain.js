import React , {useState} from 'react';
import { NavLink , useNavigate } from 'react-router-dom';
import Image from '../../../image/attendit-4.png';
import './NavBarMain.css';

export default function NavBarMain() {
  const history = useNavigate();
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(current => !current);
  };

  const handleLogOut = () => {
    history('/', { replace: true });
  }

    return (
      <>
        <nav>
          <a href="/user-home">
            <img src={Image} alt="AttendIt" width="180vh" />
          </a>

          <div>
            <ul
              id="navbar"
              className={state ? '#navbar active' : '#navbar'}
            >
              <li>
                <NavLink to="/user-home">Home</NavLink>
              </li>

              <li>
                <NavLink to="/user-home-aboutMe">About Me</NavLink>
              </li>

              <li>
                <NavLink to="/" onClick={handleLogOut}>Log out</NavLink>
              </li>
            </ul>
          </div>

          <div id="mobile" onClick={() => handleClick()}>
            <i
              id="bar"
              className={state ? 'fas fa-times' : 'fas fa-bars'}
            ></i>
          </div>
        </nav>
      </>
    );
  
}

