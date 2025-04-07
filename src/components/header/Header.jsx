import { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { FaBars } from "react-icons/fa";

function header() {
  let  [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  let iconStyles = {position:'absolute', top:'20px', right: '20px',  fontSize: "1.5em" };
  return (
    <>
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>
      <nav className="nav">
        <div className="logo-holder">
          <a href="/index.html">
            <img
              src={"/images/logo.jpg"}
              className="logo"
              alt="Company logo"
            />
          </a>
          <div className="menu-icon">
            <FaBars onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
              size="50px"
              style={iconStyles}
            />
          </div>
        </div>
        {/* <!-- Desktop menu list --> */}
        <div className="menu-holder">
          <DesktopNav />

          {/* <!-- Mobile menu list --> */}
           { toggleMobileMenu &&
            <MobileNav />
          }
        </div>
      </nav>
    </>
  );
}

export default header;
