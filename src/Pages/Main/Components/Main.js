/* eslint-disable no-lone-blocks */
import { Container, Row, Col, Button } from "reactstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import "./Main.css";
function Main() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section id="main">
      <Container fluid="lg">
        <Row className="align-items-center justify-content-center">
          <Col md="5" className="text-center text-md-start">
            <h1>
              <div className="display-4 mb-4">Learn with Wasif</div>
            </h1>

            <a href="#pricing" className="btn btn-dark me-1">
              Plans
            </a>
            <Button className="btn btn-dark" onClick={handleShow}>
              Explore Other Programs
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Take a look other Programs</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <p>
                  Didn't Inherit Supernatural Strength? No Worries.We got you.
                </p>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
          <Col md="5" className="text-center d-none d-lg-block">
            <img
              className="img"
              src="/images/Main_image.jpg"
              alt=""
              height="500"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Main;

//  <section id="intro">
//     <div class="container-lg">
//       <div class="row justify-content-center align-items-center">
//         <div class="col-md-5 text-center text-md-start">
//           <h1>
//             <div class="display-2">Wanna be like Bruce Wayne?</div>
//             <div class="display-5 text-muted">The World Needs You</div>
//           </h1>
//           <p class="lead my-4 text-muted">
//             " I believe what doesn't kill you simply makes you, stranger." -
//             The Joker
//           </p>
//           <a href="#pricing" class="btn btn-secondary">Activate Bat Signal</a>
//           <!-- <img
//             class="img-fluid bg-img"
//             src="/Asset/Batman 2.jpg"
//             alt="Batman bg"
//           /> -->
//           <!--Sidebar trigger-->
//           <a
//             href="#sidebar"
//             class="btn btn-secondary"
//             data-bs-toggle="offcanvas"
//             aria-control="sidebar"
//             >Explore Other Programs</a
//           >
//         </div>
//         <div class="col-md-5 text-center d-none d-md-block">
//           <img class="img-fluid" src="/Asset/Batman.jpg" alt="BatSign" />
//         </div>
//       </div>
//     </div>
//   </section>
