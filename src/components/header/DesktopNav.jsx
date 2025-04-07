import React from 'react';
import {NavLink} from 'react-router-dom';

function DesktopNav() {
  return (
   <>
    <ul className="desktop-menu-list">
            <li>
              <NavLink to="/" className="home-pag">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/beauty" className="project-pag">
                Beauty
              </NavLink>
            </li>
            <li>
              <NavLink to="/cars" className="register-pag">
                Cars
              </NavLink>
            </li>
            <li>
              <div className="contact">
                <NavLink
                  to="/contact"
                  className="donate-page"
                >
                  Contact
                </NavLink>
              </div>
            </li>
          </ul>
   </>
  )
}

export default DesktopNav