// import React from "react";
// import "./Dhukbo.css";
// import { Button, Input } from "reactstrap";
// import { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
// import {
//   auth,
//   logInWithEmailAndPassword,
//   signInWithGoogle,
// } from "../../firebase";

// const DHukbo = () => {
//   const [user, loading] = useAuthState(auth);

//   const navigate = useNavigate();

//   const { register, handleSubmit } = useForm();
//   useEffect(() => {
//     if (loading) {
//       console.log("Ami loading");
//       return;
//     }
//     if (user) {
//       console.log(user);
//       navigate("/Home");
//     }
//   }, [user, loading, navigate]);

//   const onSubmit = (data) => {
//     console.log(data);
//     logInWithEmailAndPassword(data.email, data.pass);
//   };
//   return (
//     <div className="dhukboContainer">
//       <header className="dhukboHeader">
//         <img src="/images/LearnHub.jpg" alt="" height="90" width="140" />
//       </header>
//       <main className="dhukboMain">
//         <div className="dhukboFormContainer">
//           <div className="text-center mb-4">
//             <h3>Log in</h3>
//           </div>
//           <form>
//             <label>Email</label>
//             <Input />
//             <label>Password</label>
//             <Input />
//             <div className="ButtonHolder mt-4">
//               <Button size="lg" className="btn-danger rounded-pill btn1">
//                 Log in
//               </Button>
//             </div>
//             <hr></hr>
//           </form>
//           <div className="ButtonHolder mt-4">
//             <Button
//               size="lg"
//               color="dark"
//               className="btn rounded-pill btn1"
//               outline
//             >
//               <img src="/images/Googlelogo.svg" alt="" />
//               Log in with Google
//             </Button>
//           </div>
//         </div>
//       </main>
//       <footer className="dhukboFooter">
//         <span className="text-white">Learn with Wasif</span>
//       </footer>
//     </div>
//   );
// };

// export default DHukbo;
