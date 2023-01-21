import "./LogIn.css";
import React, { useEffect } from "react";
import { Button, Input, Label } from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";

const LogIn = () => {
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  const { handleSubmit, control } = useForm();
  useEffect(() => {
    if (loading) {
      console.log("Ami loading");
      return;
    }
    if (user) {
      console.log(user);
      navigate("/Home");
    }
  }, [user, loading, navigate]);

  const onSubmit = (data) => {
    console.log(data);
    logInWithEmailAndPassword(data.email, data.pass);
  };

  return (
    <div className="gandu">
      <div className="grid-container-login">
        <div className="grid-item">
          <img
            src="/images/Batman2.jpg"
            alt=""
            height="600"
            width="500"
            className="loginImage"
          />
        </div>
        <div className="grid-item">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Label>Enter Email:</Label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
            <Label>Enter password:</Label>
            <Controller
              name="pass"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
            <Button type="submit" color="light">
              Login
              <i className="bi bi-box-arrow-in-right"></i>
            </Button>
          </form>
          <Button
            className="btn-light rounded-pill mb-2 mt-2"
            onClick={signInWithGoogle}
          >
            <i className="bi bi-google"></i>
          </Button>
          {/* <div>
            <Link to="/reset" className="loginLink">
              Forgot Password?
            </Link>
          </div> */}
          <div>
            <Link to="/register" className="loginLink">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
