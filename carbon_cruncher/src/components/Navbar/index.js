import React from "react";
import { Navbar, Logo } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const NavbarComponent = () => {
  return (
    <Navbar>
      <div className="header p-0 m-0">
        <div className="logo">
          <Logo src="/images/Logo.png"/>
        </div>
        <div className="hamburger">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
