import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Preloader from "../helper/Preloader";

const LoginForm = () => {
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
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // Handle form submission, e.g., send data to an API
  };
  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}
      <form onSubmit={handleSubmit}>
        <div className="mainform-container">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email:"
            value={formData.email}
            onChange={handleChange}
            className="input-container"
          />
        </div>
        <div className="mainform-container">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="input-container"
          />
        </div>
        <div className="submit-button">
          <button type="submit">Login</button>
        </div>
        <div className="password-container">
          <p>
            <a href="">Forgot Your Password?</a>
          </p>
          <p>Don't have an account yet?</p>
        </div>
        <div className="signup-button">
          <Link style={{ color: "white" }} to="/signup">
            <button type="button">Sign Up Now!</button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
