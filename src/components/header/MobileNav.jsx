
import {NavLink} from 'react-router-dom';
function MobileNav() {

  return (
    <>
    <ul className="mobile-menu-list">
            <li>
              <NavLink to="/" className="home-page">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/beauty" className="project-page">
                Beauty
              </NavLink>
            </li>
            <li>
              <NavLink to="/cars" className="register-page">
                Cars
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="contact donate-page"
              >
                Contact
              </NavLink>
            </li>
          </ul>
    </>
  )
}

export default MobileNav