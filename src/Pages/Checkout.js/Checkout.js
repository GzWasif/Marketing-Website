import React from "react";
import { Button, Input } from "reactstrap";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  return (
    <div className="jani-na">
      <div className="checkout-container">
        <div className="checkout-grid">
          <header className="checkout-grid-item-header">
            <div className="checkout-grid-item-title">
              <h3>Checkout</h3>
            </div>
            <div className="checkout-grid-item-home-link">
              <Button color="primary" onClick={() => navigate("/Home")}>
                Home
              </Button>
            </div>
          </header>

          <div className="checkout-grid-item-1">
            <h4 className="text-primary">
              <i class="bi bi-1-circle"></i>
              <span>Shipping Address</span>
            </h4>
            <Input placeholder="Email Address" />
            <hr />
            <Input placeholder="First Name*" className="d-inline" />
            <Input placeholder="Last Name*" className="d-inline" />
            <Input placeholder="Street Address*" />
            <Input placeholder="City*" />
            <Input placeholder="Zip/Postal Code*" />
          </div>
          <div className="checkout-grid-item-2">
            <h4 className="text-primary">
              <i class="bi bi-2-circle"></i>
              <span>Shipping Methods</span>
            </h4>
          </div>
          <div className="checkout-grid-item-4">
            <h4 className="text-primary">
              <i class="bi bi-4-circle"></i>
              <span>Order Summary</span>
            </h4>

            <p>
              <p>wdada</p>
              <p>dadadad</p>
              <p>dadad</p>
            </p>
            <Button color="primary" size="lg" className="rounded-pill">
              Place Order
            </Button>
          </div>
          <div className="checkout-grid-item-3">
            <h4 className="text-primary">
              <i class="bi bi-3-circle"></i>
              <span>Payment Methods</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
