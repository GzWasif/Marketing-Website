import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Row,
  Input,
} from "reactstrap";
import { useState } from "react";

function BatmanForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("We will get back to you");
    setEmail("");
    setName("");
    setSubject("");
    setQuery("");
  };

  return (
    <section className="bg-dark" id="contact">
      <Container fluid="lg">
        <div class="text-center text-light">
          <h2>Get in touch...</h2>
          <p class="lead">Fill out the form to reach me directly</p>
        </div>
        <Row className="justify-content-center my-5">
          <Col lg="6">
            <Form className="text-light" onSubmit={handleSubmit}>
              <FormGroup>
                <label className="d-block" forhtml="email">
                  Name:
                </label>
                <Input
                  type="text"
                  class=" mt-2 mb-4"
                  id="name"
                  placeholder="BruceWayne"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <label className="d-block" forhtml="name">
                  Email Address:
                </label>
                <Input
                  type="email"
                  class=" mt-2 mb-4"
                  id="email"
                  placeholder="BruceWayne@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <label className="d-block" forhtml="subject">
                  What is your query about?
                </label>

                <Input
                  id="subject"
                  type="select"
                  className="mt-2 mb-4"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option value="pricing">Pricing Query</option>
                  <option value="content">Content Query</option>
                  <option value="others">Other Queries</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <label className="d-block" forhtml="query">
                  Your Query
                </label>

                <Input
                  id="query"
                  type="textarea"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </FormGroup>
              <div className="text-center">
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default BatmanForm;

// <!--Contact  Form-->
// <section class="bg-dark" id="contact">
//   <div class="container-lg">
//     <div class="text-center text-light">
//       <h2>Get in touch...</h2>
//       <p class="lead">Fill out the form to reach me directly</p>
//     </div>
//     <div class="row justify-content-center my-5">
//       <div class="col-lg-6">
//         <from class="text-light">
//           <label for="email" class="form-label">Email Address:</label>
//           <div class="input-group mb-4">
//             <span class="input-group-text">
//               <i class="bi bi-envelope-fill"></i>
//             </span>
//             <input
//               type="email"
//               class="form-control"
//               id="email"
//               placeholder="BruceWayne@example.com"
//             />
//             <span class="input-group-text">
//               <span
//                 class="tt"
//                 data-bs-placement="bottom"
//                 title="Enter a valid email"
//               >
//                 <i class="bi bi-question-circle"></i>
//               </span>
//             </span>
//           </div>

//           <label for="name" class="form-label">Name:</label>
//           <div class="input-group mb-4">
//             <span class="input-group-text">
//               <i class="bi bi-person-fill"></i>
//             </span>
//             <input
//               type="text"
//               class="form-control"
//               id="name"
//               placeholder="Bruce Wayne"
//             />
//             <span class="input-group-text">
//               <span
//                 class="tt"
//                 data-bs-placement="bottom"
//                 title="Self Explanatory"
//               >
//                 <i class="bi bi-question-circle"></i>
//               </span>
//             </span>
//           </div>

//           <label for="subject" class="form-label"
//             >What is your query about?</label
//           >
//           <br />
//           <div class="input-group mb-4">
//             <span class="input-group-text">
//               <i class="bi bi-chat-square-dots-fill"></i>
//             </span>
//             <select id="subject" class="from-select">
//               <option value="pricing" selected>Pricing Query</option>
//               <option value="content">Content Query</option>
//               <option value="others">Other Queries</option>
//             </select>
//           </div>

//           <br />
//           <label for="query" class="form-label">Your Query</label>
//           <textarea
//             id="query"
//             cols="30"
//             rows="10"
//             class="form-control"
//           ></textarea>
//           <div class="text-center">
//             <button class="btn btn-secondary mt-2">Submit</button>
//           </div>
//         </from>
//       </div>
//     </div>
//   </div>
// </section>
