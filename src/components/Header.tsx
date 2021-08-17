import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "./Link";
import Switch from "react-switch";
import { FaSun, FaMoon } from "react-icons/fa";
import "./styles/Header.scss";

const sections = ["about", "skills", "projects", "education", "contact"];

interface HeaderProps {
  darkTheme: boolean;
  toggleTheme: () => void;
}

const Header = (props: HeaderProps) => {
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="md"
      variant={props.darkTheme ? "dark" : "light"}
      bg={props.darkTheme ? "dark" : "light"}
      className="header"
    >
      <label htmlFor="theme-switch">
        <Switch
          checked={props.darkTheme}
          onChange={() => props.toggleTheme()}
          onColor="#814ad8"
          handleDiameter={30}
          uncheckedIcon={<FaSun className="sun" />}
          checkedIcon={<FaMoon className="moon" />}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={25}
          width={50}
          className="theme-switch"
          id="theme-switch"
        />
      </label>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto">
          {sections.map((section) => (
            <Link section={section} />
          ))}
         
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
