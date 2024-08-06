import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Preloader from "../helper/Preloader";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  let [active, setActive] = useState(true);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log("Response data:", data);
        // Handle successful login, e.g., store token, redirect to dashboard
        navigate("/dashboard");
      } catch (error) {
        console.error("Error logging in:", error);
        // Handle login error, e.g., show error message to user
      }
    }
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
          {errors.email && <p className="error">{errors.email}</p>}
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
          {errors.password && <p className="error">{errors.password}</p>}
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
