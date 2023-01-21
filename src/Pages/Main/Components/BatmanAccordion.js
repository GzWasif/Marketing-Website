import { Col, Container, Row } from "reactstrap";

import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

function BatmanAccordion() {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <section id="topics">
      <Container fluid="md">
        <div className="text-center">
          <h2>Inside this program</h2>
          <p className="lead text-muted">
            A quick glance at the topics you'll learn
          </p>
        </div>

        <Row className="my-5 g-3 justify-content-around align-items-center">
          <Col xs="6" lg="6">
            <img className="img-fluid" src="/images/react-logo.svg" alt="" />
          </Col>
          <Col lg="6">
            <div>
              <Accordion open={open} toggle={toggle} id="chapters">
                <AccordionItem>
                  <AccordionHeader targetId="1">Virtual DOM</AccordionHeader>
                  <AccordionBody accordionId="1">
                    <strong>
                      Virtual DOM is an exact copy of the browser DOM.
                    </strong>
                    Manually manipulating every DOM node is redundant and
                    performance heavy.To solve this phenomenon React was
                    introduced which keeps a copy of the DOM and re-renders only
                    the DOM elements that gets changed.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="2">JSX</AccordionHeader>
                  <AccordionBody accordionId="2">
                    <strong>JSX stands for JavaScript XML.</strong>
                    This allows us to write HTML in React with the full power of
                    javascript. We can embed any javascript expression within
                    curly braces.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="3">Components</AccordionHeader>
                  <AccordionBody accordionId="3">
                    <strong>
                      Components let us split the UI intop independent, reusable
                      pieces and think about each piece in isolation.
                    </strong>
                    There are 2 types of components- function and class.
                    Components accept props and return JSX.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="4">
                    Conditional Rendering
                  </AccordionHeader>
                  <AccordionBody accordionId="4">
                    <strong>
                      If you are familiar with programming this resembles
                      conditions.
                    </strong>
                    We can use if else statement if we want but using ternary
                    enhances readability. Nesting multiple ternary operators can
                    make the code complex.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="5">Hooks</AccordionHeader>
                  <AccordionBody accordionId="5">
                    <strong>
                      Hooks are functions that let us "hook into" React state
                      and lifecycle features from function components.
                    </strong>
                    Some of the most used hooks are useState, useEffect, useRef,
                    useCallback, useMemo etc. Hooks defined in React start with
                    "use". We can define our own custom hooks that can
                    facilitate logic sharing.
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default BatmanAccordion;

// <section id="topics">
//       <div class="container-md">
//         <div class="text-center">
//           <h2>Inside this program...</h2>
//           <p class="lead text-muted">
//             A quick glance at the topics you'll learn
//           </p>
//         </div>

//         <div class="row my-5 g-3 justify-content-around align-items-center">
//           <div class="col-6 col-lg-6">
//             <img src="/Asset/batman3.jpg" alt="Batman" class="img-fluid" />
//           </div>
//           <div class="col-lg-6">
//             <!--accordion-->
//             <div class="accordion" id="chapters">
//               <div class="accordion-item">
//                 <h2 class="accordion-header" id="heading-1">
//                   <button
//                     class="accordion-button"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#chapter-1"
//                     aria-expanded="true"
//                     aria-controls="chapter-1"
//                   >
//                     Chapter 1-Your First Lesson
//                   </button>
//                 </h2>
//                 <div
//                   class="accordion-collapse collapse show"
//                   id="chapter-1"
//                   aria-labelledby="heading-1"
//                   data-bs-parent="#chapters"
//                 >
//                   <div class="accordion-body">
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Explicabo nostrum, voluptas blanditiis nobis deserunt
//                       quaerat rem! Atque quam fuga asperiores.
//                     </p>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Placeat nisi assumenda qui consequuntur quidem est
//                       temporibus possimus illum beatae sapiente!
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div class="accordion-item">
//                 <h2 class="accordion-header" id="heading-2">
//                   <button
//                     class="accordion-button"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#chapter-2"
//                     aria-expanded="true"
//                     aria-controls="chapter-2"
//                   >
//                     Chapter 2-Your Second Lesson
//                   </button>
//                 </h2>
//                 <div
//                   class="accordion-collapse collapse"
//                   id="chapter-2"
//                   aria-labelledby="heading-2"
//                   data-bs-parent="#chapters"
//                 >
//                   <div class="accordion-body">
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Explicabo nostrum, voluptas blanditiis nobis deserunt
//                       quaerat rem! Atque quam fuga asperiores.
//                     </p>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Placeat nisi assumenda qui consequuntur quidem est
//                       temporibus possimus illum beatae sapiente!
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div class="accordion-item">
//                 <h2 class="accordion-header" id="heading-3">
//                   <button
//                     class="accordion-button"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#chapter-3"
//                     aria-expanded="true"
//                     aria-controls="chapter-3"
//                   >
//                     Chapter 3-Your Third Lesson
//                   </button>
//                 </h2>
//                 <div
//                   class="accordion-collapse collapse"
//                   id="chapter-3"
//                   aria-labelledby="heading-3"
//                   data-bs-parent="#chapters"
//                 >
//                   <div class="accordion-body">
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Explicabo nostrum, voluptas blanditiis nobis deserunt
//                       quaerat rem! Atque quam fuga asperiores.
//                     </p>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Placeat nisi assumenda qui consequuntur quidem est
//                       temporibus possimus illum beatae sapiente!
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div class="accordion-item">
//                 <h2 class="accordion-header" id="heading-4">
//                   <button
//                     class="accordion-button"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#chapter-4"
//                     aria-expanded="true"
//                     aria-controls="chapter-4"
//                   >
//                     Chapter 4-Your Fourth Lesson
//                   </button>
//                 </h2>
//                 <div
//                   class="accordion-collapse collapse"
//                   id="chapter-4"
//                   aria-labelledby="heading-4"
//                   data-bs-parent="#chapters"
//                 >
//                   <div class="accordion-body">
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Explicabo nostrum, voluptas blanditiis nobis deserunt
//                       quaerat rem! Atque quam fuga asperiores.
//                     </p>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Placeat nisi assumenda qui consequuntur quidem est
//                       temporibus possimus illum beatae sapiente!
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div class="accordion-item">
//                 <h2 class="accordion-header" id="heading-5">
//                   <button
//                     class="accordion-button"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#chapter-5"
//                     aria-expanded="true"
//                     aria-controls="chapter-5"
//                   >
//                     Chapter 5-Your Last Lesson
//                   </button>
//                 </h2>
//                 <div
//                   class="accordion-collapse collapse"
//                   id="chapter-5"
//                   aria-labelledby="heading-5"
//                   data-bs-parent="#chapters"
//                 >
//                   <div class="accordion-body">
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Explicabo nostrum, voluptas blanditiis nobis deserunt
//                       quaerat rem! Atque quam fuga asperiores.
//                     </p>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Placeat nisi assumenda qui consequuntur quidem est
//                       temporibus possimus illum beatae sapiente!
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
