/* eslint-disable no-unused-vars */
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

function Img() {
  return (
    <>
      <Navbar className="my-2" color="dark" dark>
        <NavbarBrand href="/">
          <img
            alt="logo"
            src="./Asset/Batman 2.jpg"
            style={{
              height: 40,
              width: 40,
            }}
          />
        </NavbarBrand>
      </Navbar>
      <Navbar className="my-2" color="secondary" dark>
        <NavbarBrand href="/">Reactstrap</NavbarBrand>
      </Navbar>
      <Navbar className="my-2" color="dark" dark>
        <NavbarBrand href="/">
          <img
            alt=""
            src="./Asset/Batman 2.jpg"
            style={{
              height: 40,
              width: 40,
            }}
          />
        </NavbarBrand>
      </Navbar>
    </>
  );
}

export default Img;
