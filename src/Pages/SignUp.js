import React, { useState, useEffect, useRef } from "react";
import Preloader from "../helper/Preloader";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    surname: "",
    password: "",
    terms: false,
  });
  const [errors, setErrors] = useState({
    email: "",
    firstname: "",
    surname: "",
    password: "",
    terms: "",
  });
  const prevErrorsRef = useRef(errors);

  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 2000);
  }, []);

  const validateForm = async () => {
    let isValid = true;
    const newErrors = {
      email: "",
      firstname: "",
      surname: "",
      password: "",
      terms: "",
    };

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email format is invalid.";
      isValid = false;
    } else {
      const emailExists = await checkEmailExists(formData.email);
      if (emailExists) {
        newErrors.email = "Email is already registered.";
        isValid = false;
      }
    }

    // Validate firstName
    if (!formData.firstname) {
      newErrors.firstname = "First name is required.";
      isValid = false;
    }

    // Validate surName
    if (!formData.surname) {
      newErrors.surname = "Surname is required.";
      isValid = false;
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required.";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
      isValid = false;
    }

    // Validate terms checkbox
    if (!formData.terms) {
      newErrors.terms = "You must accept the terms and conditions.";
      isValid = false;
    }

    setErrors(newErrors);
    prevErrorsRef.current = newErrors; // Update the ref with the latest errors
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!(await validateForm())) return; // Stop form submission if validation fails

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Registration successful:", result);
        navigate("/successful");
      } else if (result.error && result.error === "Email already exists") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "This email is already registered.",
        }));
      } else {
        console.error("Registration failed:", result);
        // Handle other registration errors
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const checkEmailExists = async (email) => {
    try {
      const response = await fetch(
        `http://localhost:3000/check-email?email=${encodeURIComponent(email)}`
      );
      const data = await response.json();
      return data.emailExists;
    } catch (error) {
      console.error("Error checking email:", error);
      return false;
    }
  };

  return (
    <>
      {active && <Preloader />}
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
                {errors.email && <p className="error">{errors.email}</p>}
              </div>

              <div className="mainform-container">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First Name:"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="input-container"
                />
                {errors.firstname && (
                  <p className="error">{errors.firstname}</p>
                )}
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
                {errors.surname && <p className="error">{errors.surname}</p>}
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
                {errors.password && <p className="error">{errors.password}</p>}
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
                  <a href="#">captcha</a>
                </p>
                <div style={{ display: "flex" }}>
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    className="form-check-input me-2"
                    checked={formData.terms}
                    onChange={handleChange}
                  />
                  <p style={{ paddingLeft: 5, margin: 0, fontWeight: 500 }}>
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
                {errors.terms && <p className="error">{errors.terms}</p>}
              </div>

              <div className="regButton">
                <button type="submit">Create Account</button>
                <span
                  style={{
                    textDecoration: "none",
                    fontWeight: "500",
                    paddingLeft: 5,
                  }}
                >
                  Already have an account?
                  <a
                    style={{ color: "red", textDecoration: "none" }}
                    href="/login"
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
