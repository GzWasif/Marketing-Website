import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Row,
  Col,
  FormGroup,
  Input,
} from "reactstrap";

function BatmanModal() {
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState("");

  const toggle = () => {
    setModal(!modal);
  };

  const handleRegister = () => {
    alert("You are registered");
    setEmail("");
  };
  return (
    <section className="bg-light">
      <Container>
        <div class="text-center">
          <h2>Stay Updated</h2>
          <p class="lead">Get the latest updates</p>
        </div>

        <Row className="justify-content-center">
          <Col className="text-center" md="5">
            <p class="text-muted my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              exercitationem consequatur facere delectus dolores? Veritatis
              nulla, voluptates ducimus eos quam deleniti dolorem porro nobis
              corrupti!
            </p>
          </Col>
        </Row>
      </Container>
      <div className="text-center">
        <Button color="primary" onClick={toggle}>
          Registar for updates
        </Button>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Get the latest updates</ModalHeader>
        <ModalBody className="d-inline">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <FormGroup>
            <label className="mt-2" forhtml="email">
              Enter Your Email
            </label>
            <Input
              id="email"
              placeholder="BruceWayne@example.com"
              className="mt-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            ></Input>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={(e) => {
              handleRegister();
              toggle();
            }}
          >
            Register
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </section>
  );
}

export default BatmanModal;

// <section class="bg-light">
//       <div class="container">
//         <div class="text-center">
//           <h2>Stay Updated</h2>
//           <p class="lead">Get the latest updates</p>
//         </div>
//         <div class="row justify-content-center">
//           <div class="col-md-8 text-center">
//             <p class="text-muted my-4">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
//               exercitationem consequatur facere delectus dolores? Veritatis
//               nulla, voluptates ducimus eos quam deleniti dolorem porro nobis
//               corrupti!
//             </p>
//             <button
//               class="btn btn-primary"
//               data-bs-toggle="modal"
//               data-bs-target="#reg-modal"
//             >
//               Register for updates
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>

//     <!--Modal-->
//     <div
//       class="modal fade"
//       id="reg-modal"
//       tabindex="-1"
//       aria-labelledby="modal-title"
//       aria-hidden="true"
//     >
//       <div class="modal-dialog">
//         <div class="modal-content">
//           <div class="modal-header">
//             <h5 class="modal-title" id="modal-title">Get the Latest Updates</h5>
//             <button
//               class="btn btn-close"
//               data-bs-dismiss="modal"
//               aria-label="close"
//             ></button>
//           </div>
//           <div class="modal-body">
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
//               similique suscipit eligendi sit, nihil molestias quas vel a hic
//               vitae cupiditate ut, dolore quis? Totam?
//             </p>
//             <label for="email" class="form-label">Enter Your Email</label>
//             <input
//               id="email"
//               type="email"
//               class="form-control"
//               placeholder="Bruce Wayne@example.com"
//             />
//           </div>
//           <div class="modal-footer">
//             <button class="btn btn-primary">Submit</button>
//           </div>
//         </div>
//       </div>
//     </div>
