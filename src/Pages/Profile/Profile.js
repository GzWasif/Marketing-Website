import React from "react";
import { useUserContext } from "../../Context/userContext";
import { Spinner } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../firebase";
import "./Profile.css";
import { useState } from "react";

const Profile = () => {
  const user = useUserContext();
  const navigate = useNavigate();

  const [hudai, setHudai] = useState(true);

  setTimeout(() => {
    setHudai(false);
  }, 2000);

  const handleClick = async () => {
    const b = await logout();
    console.log(b);
    navigate("/");
  };

  return (
    <div className="profileContainer">
      <div className="profileGrid">
        <div className="profileHeader">
          <h3 className="text-dark">Hello, {user.displayName}</h3>
        </div>
        <div className="profileSidebar">
          <ul>
            <li>
              <Link to="/Home" className="sidebarLink">
                <h1>
                  <i class="bi bi-house-fill"></i>
                </h1>
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} className="sidebarLink">
                <h1>
                  <i class="bi bi-box-arrow-left"></i>
                </h1>
              </Link>
            </li>
          </ul>
        </div>
        <div className="profileContent">
          {hudai ? (
            <div className="spinnerEffect">
              <Spinner color="primary" type="grow">
                Loading...
              </Spinner>
              <Spinner color="secondary" type="grow">
                Loading...
              </Spinner>
              <Spinner color="success" type="grow">
                Loading...
              </Spinner>
              <Spinner color="danger" type="grow">
                Loading...
              </Spinner>
              <Spinner color="warning" type="grow">
                Loading...
              </Spinner>
              <Spinner color="info" type="grow">
                Loading...
              </Spinner>
              <Spinner color="light" type="grow">
                Loading...
              </Spinner>
              <Spinner color="dark" type="grow">
                Loading...
              </Spinner>
            </div>
          ) : (
            <div className="resetPassButton">
              <p className=" text-white">Nothin to show</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
