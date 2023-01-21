/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container,
  Button,
} from "reactstrap";
import { logout, auth } from "../../../firebase";
import { useNavigate, Link } from "react-router-dom";
import "./Navbar.css";

function TrialNavbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogOut = async () => {
    const b = await logout(auth);
    localStorage.setItem("user", null);
    navigate("/");
  };
  return (
    <div className="Navbar">
      <Navbar color="dark" dark expand="lg">
        <NavbarBrand href="/Home">
          {/* <img src="/images/Batman2.jpg" style={{ height: 50 }} alt="" /> */}
          <h5>Learnhub</h5>
        </NavbarBrand>
        <NavbarToggler onClick={() => setOpen(!open)} />
        <Collapse isOpen={open} navbar>
          <Nav className="" navbar>
            <NavItem>
              <NavLink href="#topics" className="text-white">
                Learn React
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#reviews" className="text-white">
                Reviews
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact" className="text-white">
                Get in touch
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#pricing" className="text-white">
                Start today
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/profile" className="text-white Link">
                  <i className="bi bi-person-square"></i>
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <NavItem onClick={handleLogOut} className="logOutButton">
          <h3 className="text-white">
            <i className="bi bi-box-arrow-left"></i>
          </h3>
        </NavItem>
      </Navbar>
    </div>
  );
}

export default TrialNavbar;
