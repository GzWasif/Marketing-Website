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
} from "reactstrap";

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Container fluid="xxl">
          <NavbarBrand href="/">
            <img src="/images/Batman2.jpg" style={{ height: 150 }} alt="" />
          </NavbarBrand>

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className="navLinkContainer" fluid>
            <Nav navbar>
              <NavItem>
                <NavLink href="#topics">Be A BAT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#reviews">Reviews</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">Get in touch</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pricing">Start today</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Example;

// {
//   /* <nav class="navbar navbar-expand-md navbar-dark bg-dark" id="Navbar">
//       <div class="container-xxl">
//         <a href="#intro" class="navbar-brand">
//           <img src="/Asset/Batman 2.jpg" height="100" width="100" alt="" />
//         </a>

//         <!--toogle button for mobiles-->
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#main-nav"
//           aria-controls="main-nav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>

//         <!--links-->
//         <div
//           class="collapse navbar-collapse justify-content-end align-center"
//           id="main-nav"
//         >
//           <ul class="navbar-nav">
//             <li class="nav-item">
//               <a href="#topics" class="nav-link">Be a BAT</a>
//             </li>
//             <li class="nav-item">
//               <a href="#reviews" class="nav-link">Reviews</a>
//             </li>
//             <li class="nav-item">
//               <a href="#contact" class="nav-link">Get in touch</a>
//             </li>
//             <li class="nav-item d-none d-md-inline">
//               <a href="#pricing" class="nav-link">Start today</a>
//             </li>
//             <li class="nav-item d-md-none">
//               <a
//                 href="#pricing"
//                 class="nav-link btn-outline-secondary btn d-inline p-2 rounded-pill"
//                 >Start today</a
//               >
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav> */
// }
