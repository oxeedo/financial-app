import React from "react";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import Preloader from "../helper/Preloader";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);

  const opts = {
    height: "100", // Set your desired height
    width: "200", // Set your desired width
  };

  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}
      <div>
        <header>
          <Header />
        </header>
        <div className="main-container">
          <div className="sub-container">
            <h3>Login</h3>
            <div className="innerLine"></div>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
