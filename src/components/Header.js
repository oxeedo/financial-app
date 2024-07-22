import React from "react";
import "../App.css";
import { dropdownMenu } from "../data/data";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Preloader from "../helper/Preloader";

const Header = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);
  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}
      <header className="header">
        <div className="wrapper">
          <div className="logo">
            <h1>logo</h1>
          </div>
          <ul className="navigation">
            {dropdownMenu.map((menu, i) => (
              <li key={i} className="list_menu">
                <div className="nav_menu">
                  <a href={menu.path}>{menu.title}</a>
                </div>
              </li>
            ))}
            <li className="list_menu">
              <div className="nav_menu">
                <a href="#">360&deg;</a>
              </div>
            </li>
            <li className="list_menu">
              <div className="nav_menu">
                <a href="#">More</a>
              </div>
            </li>
            <li className="access">
              <div className="get-access">
                <Link style={{ color: "white" }} to="/login">
                  Get Access
                </Link>
              </div>
            </li>
          </ul>
          <span className="bar_menu">
            <FontAwesomeIcon icon={faBars} />
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
