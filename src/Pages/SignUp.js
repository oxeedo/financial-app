import React from "react";
import Preloader from "../helper/Preloader";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SignUp = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);
  const [formData, setFormData] = useState({
    email: "",
    confirmEmail: "",
    firstName: "",
    surname: "",
    password: "",
    retypePassword: "",
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
      <div>
        <header>
          <Header />
        </header>
        <div className="signupContainer">
          <div className="subsignup-container">
            <h3>Registration</h3>
            <div className="innerLine2"></div>
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
                  type="text"
                  id="confirmEmail"
                  name="confirmEmail"
                  placeholder="Confirm Email:"
                  value={formData.confirmEmail}
                  onChange={handleChange}
                  className="input-container"
                />
              </div>
              <div className="mainform-container">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name:"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="input-container"
                />
              </div>
              <div className="mainform-container">
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  placeholder="Surname:"
                  value={formData.surname}
                  onChange={handleChange}
                  className="input-container"
                />
              </div>
              <div className="mainform-container">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password:"
                  value={formData.password}
                  onChange={handleChange}
                  className="input-container"
                />
              </div>
              <div className="mainform-container">
                <input
                  type="password"
                  id="retypePassword"
                  name="retypePassword"
                  placeholder="Retype Password:"
                  value={formData.retypePassword}
                  onChange={handleChange}
                  className="input-container"
                />
              </div>

              <div
                style={{
                  justifyContent: "center",
                  alignContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: 50,
                }}
              >
                <p>
                  <a href="">captcha</a>
                </p>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      height: 20,
                      width: 20,
                      background: "white",
                      border: "1px solid gray",
                    }}
                  ></div>
                  <p style={{ paddingLeft: 10, margin: 0, fontWeight: 500 }}>
                    I accept the
                    <span style={{ color: "red", padding: 5, fontWeight: 500 }}>
                      <a
                        style={{ color: "red", textDecoration: "none" }}
                        href="/"
                        onMouseOver={(e) =>
                          (e.currentTarget.style.textDecoration = "underline")
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.textDecoration = "none")
                        }
                      >
                        Terms & Conditions
                      </a>
                    </span>
                    and
                    <span style={{ color: "red", padding: 5 }}>
                      <a
                        style={{ color: "red", textDecoration: "none" }}
                        href="/"
                        onMouseOver={(e) =>
                          (e.currentTarget.style.textDecoration = "underline")
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.textDecoration = "none")
                        }
                      >
                        Privacy Policy
                      </a>
                    </span>
                  </p>
                </div>
              </div>
              <div className="regButton">
                <Link style={{ color: "white" }} to="/signup">
                  <button type="submit">Create Account</button>
                </Link>

                <span
                  style={{
                    textDecoration: "none",
                    fontWeight: "500",
                  }}
                >
                  Already have an account?
                  <a
                    style={{ color: "red", textDecoration: "none" }}
                    href="/"
                    onMouseOver={(e) =>
                      (e.currentTarget.style.textDecoration = "underline")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.textDecoration = "none")
                    }
                  >
                    Login here
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
