import React, { useEffect } from "react";
import { Button, Input, Label } from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  registerWithEmailAndPassword,
  signInWithGoogle,
  auth,
} from "../../firebase";
import "./SignUp.css";

const SIgnUp = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();

  useEffect(() => {
    if (loading) return;
    if (user) {
      navigate("/Home", { replace: true });
    }
  }, [user, loading, navigate]);

  const onSubmit = (data) => {
    console.log(data);
    registerWithEmailAndPassword(data.name, data.email, data.pass);
  };

  return (
    <div className="chandu">
      <div className="grid-container">
        <div className="grid-item">
          <img src="/images/Batman2.jpg" alt="" height="600" width="500" />
        </div>
        <div className="grid-item">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <Input type="text" placeholder="User Name:" {...register("name")} /> */}
            <Label>Enter name:</Label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
            <Label>Enter Email:</Label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
            {/* <Input
              type="email"
              placeholder="User Email:"
              {...register("email")}
            /> */}
            <Label>ENter password:</Label>
            <Controller
              name="pass"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
            {/* <Input
              type="password"
              placeholder="User Password:"
              {...register("pass")}
            /> */}
            <Button color="light" type="submit" className="mt-2">
              Sign Up
            </Button>
          </form>
          <Button
            className="btn-light  rounded-pill mb-2 mt-2 "
            onClick={signInWithGoogle}
          >
            <i className="bi bi-google"></i>
          </Button>
          <div>
            <Link className="singupLink" to="/">
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIgnUp;
