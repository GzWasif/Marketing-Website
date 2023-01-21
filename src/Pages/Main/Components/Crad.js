/* eslint-disable no-unused-vars */
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col,
  CardHeader,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

function Crad() {
  const navigate = useNavigate();
  return (
    <section className="bg-light mt-5" id="pricing">
      <Container fluid="lg">
        <div className="text-center">
          <h2>Pricing Plans</h2>
          <p className="lead text-muted">Choose a pricing plan to suit you</p>
        </div>
        <Row className="my-5 justify-content-center align-items-center g-0">
          <Col xs="8" lg="4" xl="3">
            <Card color="grey" outline>
              <CardBody className="text-center py-4">
                <CardTitle tag="h4">Starter Edition</CardTitle>
                <CardSubtitle className="lead">
                  Recorded Videos Only
                </CardSubtitle>

                <p class="display-5 my-4 text-dark fw-bold">BDT 500</p>
                <CardText className="ext-muted d-none d-lg-block">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </CardText>
                {/* <p class="card-text mx-5 text-muted d-none d-lg-block"></p> */}
                {/* <a href="#" class="btn btn-outline-primary btn-lg mt-3">
                  Buy Now
                </a> */}

                <Button
                  className="mt-3"
                  outline
                  color="dark"
                  size="lg"
                  m
                  onClick={() => navigate("/checkout")}
                >
                  Buy now
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="9" lg="4">
            <Card color="grey" outline>
              <CardHeader className="text-center text-dark">
                Most Poprlar
              </CardHeader>
              <CardBody className="text-center py-4">
                <CardTitle tag="h4">Premium Edition</CardTitle>
                <CardSubtitle className="lead">
                  In house physical training
                </CardSubtitle>

                <p className="display-5 my-4 text-dark fw-bold">BDT 1000</p>
                <CardText>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </CardText>
                {/* <p class="card-text mx-5 text-muted d-none d-lg-block"></p> */}
                {/* <a href="#" class="btn btn-outline-primary btn-lg mt-3">
                  Buy Now
                </a> */}

                <Button
                  className="mt-3"
                  color="dark"
                  outline
                  size="lg"
                  onClick={() => navigate("/checkout")}
                >
                  Buy now
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="8" lg="4" xl="3">
            <Card color="grey" outline>
              <CardBody className="text-center py-4">
                <CardTitle tag="h4">Exclusive Edition</CardTitle>
                <CardSubtitle className="lead">
                  Complementary BAT SUIT
                </CardSubtitle>

                <p className="display-5 my-4 text-dark fw-bold">BDT 9999</p>
                <CardText>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </CardText>
                {/* <p class="card-text mx-5 text-muted d-none d-lg-block"></p> */}
                {/* <a href="#" class="btn btn-outline-primary btn-lg mt-3">
                  Buy Now
                </a> */}

                <Button
                  color="dark"
                  outline
                  size="lg"
                  className="mt-3"
                  onClick={() => navigate("/checkout")}
                >
                  Buy now
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Crad;

// {/* <section class="bg-light mt-5" id="pricing">
//       <div class="container-lg">
//         <div class="text-center">
//           <h2>Pricing Plans</h2>
//           <p class="lead text-muted">Choose a pricing plan to suit you</p>
//         </div>

//         <div class="row my-5 align-items-center justify-content-center g-0">
//           <div class="col-8 col-lg-4 col-xl-3">
//             <div class="card border-0">
//               <div class="card-body text-center py-4">
//                 <h4 class="card-title">Starter Edition</h4>
//                 <p class="lead card-subtitle">Recorded Videos Only</p>
//                 <p class="display-5 my-4 text-primary fw-bold">BDT 500</p>
//                 <p class="card-text mx-5 text-muted d-none d-lg-block">
//                   Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                 </p>
//                 <a href="#" class="btn btn-outline-primary btn-lg mt-3"
//                   >Buy Now</a
//                 >
//               </div>
//             </div>
//           </div>
//           <div class="col-9 col-lg-4">
//             <div class="card border-info border-2">
//               <div class="card-header text-center text-info">Most Popular</div>
//               <div class="card-body card-header text-center py-4">
//                 <h4 class="card-title">Premium Edition</h4>
//                 <p class="lead card-subtitle">In house physical training</p>
//                 <p class="display-5 my-4 text-info fw-bold">BDT 1000</p>
//                 <p class="card-text mx-5 text-muted d-none d-lg-block">
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 </p>
//                 <a href="#" class="btn btn-outline-info btn-lg mt-3">Buy Now</a>
//               </div>
//             </div>
//           </div>
//           <div class="col-8 col-lg-4 col-xl-3">
//             <div class="card border-0">
//               <div class="card-body text-center py-4">
//                 <h4 class="card-title">Exclusive Edition</h4>
//                 <p class="lead card-subtitle">Complementary BAT SUIT</p>
//                 <p class="display-5 my-4 text-warning fw-bold">BDT 9999</p>
//                 <p class="card-text mx-5 text-muted d-none d-lg-block">
//                   Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                 </p>
//                 <a href="#" class="btn btn-outline-warning btn-lg mt-3"
//                   >Buy Now</a
//                 >
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section> */}
