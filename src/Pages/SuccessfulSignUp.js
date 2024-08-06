import React from "react";
import checkmark from "../assets/check mark.png";
import { useState, useEffect } from "react";
import Preloader from "../helper/Preloader";
import Dropdown from "../components/Dropdown";

const SuccessfulSignUp = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);
  return (
    <>
      {active === true && <Preloader />}
      <div className="success-container">
        <header className="header-signup">
          <div className="wrapper-signup">
            <div className="logo-signup">
              <h1>logo</h1>
            </div>
            <div>
              <Dropdown />
            </div>
          </div>
        </header>
        <div className="success-message">
          <div className="markIcon">
            <img
              style={{ height: 80, width: 80 }}
              src={checkmark}
              alt="checkmark"
            />
          </div>
          <h3>Thank you for Registration</h3>
          <div className="barLine"></div>
          <p
            style={{
              margin: 0,
              paddingLeft: 20,
              paddingRight: 20,
              fontSize: 14,
              textAlign: "justify",
              marginBottom: 0,
            }}
          >
            Please check your email (including your spam folder) to verify your
            account.
          </p>
          <p style={{ fontSize: 14 }}>
            If you did not receive the email, click here to request another.
          </p>
        </div>
      </div>
    </>
  );
};

export default SuccessfulSignUp;
