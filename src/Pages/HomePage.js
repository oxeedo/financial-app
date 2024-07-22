import React from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import layer1 from "../assets/Layer-1.png";
import goal from "../assets/Goal.png";
import newProject from "../assets/New-Project-2.png";
import growth from "../assets/Growth.png";
import playstore from "../assets/playstore_App.png";
import applestore from "../assets/App_Apple.png";
import gaphub_reminder from "../assets/GAPhub_Reminder.png";
import manage from "../assets/manage.png";
import GAPhub_Analytics from "../assets/GAPhub_Analytics.png";
import GAPhub_Liabilities from "../assets/GAPhub_Liabilities.png";
import chart from "../assets/chart.png";
import debt from "../assets/debt.png";
import Slider from "../components/Slider";
import play_icon from "../assets/play_icon.png";
import YouTubeEmbed from "../components/Youtube";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import { useState, useEffect } from "react";
import Preloader from "../helper/Preloader";

const HomePage = () => {
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
        <main className="account">
          <div className="Finacial-container">
            <p className="financial-life">
              The Only Account for <br />
              Your <span style={{ color: "#FF3A2D" }}> Financial Life </span>
              <br />
              you will need! <br />
              <span className="sign-up">
                Sign Up <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </p>
            <video autoplay loop muted playsinline>
              <source
                src="https://file-examples.com/storage/fed5266c9966708dcaeaea6/2017/04/file_example_MP4_1920_18MG.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="financial-independence">
            <div className="flex-item text-container">
              <p className="responsive-text primary-text">Are you</p>

              <p className="responsive-text secondary-text">
                Financially Independent?
              </p>

              <p className="responsive-text tertiary-text">
                Being financially independent is no longer an option for you. It
                is a sure way
                <br />
                to survive short or long-term economic adversities like loss of
                job or global
                <br />
                economic meltdown.
              </p>
            </div>
            <div className="flex-item image-container">
              <img className="layer1" src={layer1} alt="Description" />
            </div>
          </div>
          <div
            className="responsive-text tertiary-text"
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <p style={{ textAlign: "center", fontSize: 20, color: "gray" }}>
              Ready to see how close you are to becoming financially
              independent?
            </p>
          </div>
          <div className="button-container">
            <p className="button">CALCULATE</p>
          </div>
          <div className="asset-container">
            <div className="innerAsset">
              <div className="container">
                <div className="column">
                  <img src={goal} alt="Goal" />
                  <p className="headerTitle">01. Define Financial Goals</p>
                  <p className="financial-goal">
                    Empower your money beyond a simple spending plan. Give every
                    dime a purpose that will serve you both now and in the
                    future.
                  </p>
                  <p className="learn-button">Learn More</p>
                  <p>
                    <ul className="list-item">
                      <li>Set custom spending limits</li>
                      <li>Get realtime budget alerts</li>
                      <li> Devise a clear funds allocation plan</li>
                    </ul>
                  </p>
                </div>
                <div className="column">
                  <img
                    className="assetsImg"
                    src={newProject}
                    alt="New-project"
                  />
                  <p className="headerTitle">
                    02. Asset Acquisition Opportunities
                  </p>
                  <p>
                    Get access to opportunities that will help you. attain
                    financial independence quicker than you ever imagine.
                  </p>
                  <p className="learn-button">Learn More</p>
                  <p>
                    <ul className="list-item">
                      <li>Build a truly global asset portfolio</li>
                      <li>Intelligence report on all opportunities</li>
                      <li> Simulate and track performance</li>
                    </ul>
                  </p>
                </div>
                <div className="column">
                  <img className="assetsImg" src={growth} alt="Growth" />
                  <p className="headerTitle">03. Track Portfolio Performance</p>
                  <p className="financial-goal">
                    Experience the most powerful personal finance asset
                    management tool designed with you in mind. Start treating
                    even your savings balance as an asset.
                  </p>
                  <p style={{ marginTop: -5 }} className="learn-button">
                    Learn More
                  </p>
                  <p>
                    <ul className="list-item">
                      <li>Insight on each asset’s performance</li>
                      <li>Diversify with real intelligence</li>
                      <li>Manage your assets in one place</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="googlePlay">
            <strong>
              <p className="googleContent">TAKE CONTROL WITH GAPHUB</p>
            </strong>
            <p className="paragraphText">
              DOWNLOAD THE APP TO GET YOUR GAPHUB ACCOUNT IN MINUTES
            </p>
            <div className="imgContiner">
              <img src={playstore} alt="playstore" />
              <img src={applestore} alt="Appstore" />
            </div>
          </div>
          <div className="finantial-status">
            <div className="columnOne">
              <div style={{ marginTop: 70 }}>
                <p
                  className="finantial-text"
                  style={{
                    margin: 5,
                    fontSize: 30,
                    fontWeight: "700",
                    marginTop: 70,
                  }}
                >
                  <img
                    style={{ height: 45, width: 45, marginBottom: -10 }}
                    src={manage}
                    alt="manage"
                  />
                  <br />
                  <span style={{ color: "red" }}>MANAGE</span> ON THE <br /> GO
                </p>
                <p
                  className="finantial-text"
                  style={{
                    margin: 2,
                    fontSize: 20,
                    color: "gray",
                    width: "70%",
                    wordWrap: "break-word",
                    textAlign: "justify",
                  }}
                >
                  Whether you are at the train station waiting to catch your
                  train to work or in an Uber bringing you back home, you can
                  easily update your financial strategy or set a reminder to pay
                  a bill.
                </p>
              </div>
              <div>
                <img
                  className="finantial-img"
                  src={gaphub_reminder}
                  alt="description"
                />
              </div>
            </div>
          </div>
          <div className="smart-financially">
            <div className="columnTwo">
              <div>
                <img
                  className="finantial-img"
                  src={GAPhub_Analytics}
                  alt="description"
                />
              </div>
              <div style={{ marginTop: 70, width: "100%" }}>
                <p
                  style={{
                    margin: 5,
                    fontSize: 30,
                    fontWeight: "700",
                    width: "100%",
                  }}
                >
                  <img
                    style={{
                      height: 30,
                      width: 30,
                      marginBottom: -5,
                      paddingLeft: 80,
                    }}
                    src={chart}
                    alt="manage"
                  />
                  <br />
                  <span
                    style={{ color: "red", width: "100%", paddingLeft: 80 }}
                  >
                    GROW
                  </span>
                  SMARTER FINANCIALLY
                </p>
                <p
                  style={{
                    margin: 2,
                    fontSize: 21,
                    color: "gray",
                    paddingLeft: 80,
                  }}
                >
                  With the apt analytics display, GAPhub will help you
                </p>
                <p
                  style={{
                    margin: 5,
                    fontSize: 21,
                    color: "gray",
                    width: 500,
                    paddingLeft: 80,
                  }}
                >
                  make the right financial decisions for your future
                </p>
                <p
                  style={{
                    margin: 5,
                    fontSize: 21,
                    color: "gray",
                    paddingLeft: 80,
                  }}
                >
                  with more confidence.
                </p>
              </div>
            </div>
          </div>

          <div className="smartsmall-financially">
            <div className="columnTwo">
              <div style={{ width: "100%" }}>
                <p
                  className="finantial-text"
                  style={{
                    margin: 5,
                    fontSize: 30,
                    fontWeight: "700",
                  }}
                >
                  <img
                    style={{ height: 30, width: 30, marginBottom: -5 }}
                    src={chart}
                    alt="manage"
                  />
                  <br />
                  <span style={{ color: "red", width: "100%" }}>GROW</span>
                  SMARTER FINANCIALLY
                </p>
                <p
                  className="finantial-text"
                  style={{
                    margin: 2,
                    fontSize: 20,
                    color: "gray",
                    width: "70%",
                    wordWrap: "break-word",
                    textAlign: "justify",
                  }}
                >
                  With the apt analytics display, GAPhub will help you make the
                  right financial decisions for your future with more
                  confidence.
                </p>
                <div>
                  <img
                    className="finantial-img"
                    src={GAPhub_Analytics}
                    alt="description"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="finantial-status">
            <div className="columnThree">
              <div style={{ marginTop: 70 }}>
                <p
                  className="finantial-text"
                  style={{
                    margin: 5,
                    fontSize: 30,
                    fontWeight: "700",
                    marginTop: 70,
                  }}
                >
                  <img
                    style={{ height: 45, width: 45, marginBottom: -10 }}
                    src={debt}
                    alt="manage"
                  />
                  <br />
                  <span style={{ color: "red" }}>CONVERT</span> DEBT TO WEALTH
                </p>
                <p
                  className="finantial-text"
                  style={{
                    margin: 2,
                    fontSize: 20,
                    color: "gray",
                    width: "70%",
                    wordWrap: "break-word",
                    textAlign: "justify",
                  }}
                >
                  Watch as you engage the power of snowballing to move from red
                  to black, from debt to wealth and from financial stress to
                  financial abundance.
                </p>
              </div>
              <div>
                <img
                  className="finantial-img"
                  src={GAPhub_Liabilities}
                  alt="Gapub_liabilities"
                />
              </div>
            </div>
          </div>
          <div className="topGrade">
            <p className="topContent">Top Grade Security</p>
            <p className="topText">
              Your accounts will always be safe <br />
              and secure with our bank-grade security <br />
              and encryption systems
            </p>
          </div>
          <div className="gaphup_users">
            <p className="gaptext">What GAPhub users are saying</p>
            <br />
            <Slider />
          </div>
          <div className="youtube">
            <p className="youtubeText">
              <img src={play_icon} />
              HOW IT WORKS <br />
            </p>
            <p className="vidLg">
              <YouTubeEmbed videoId="dQw4w9WgXcQ" />
            </p>
            <p className="vidSm">
              <YouTubeEmbed videoId="dQw4w9WgXcQ" opts={opts} />
            </p>
          </div>
          <div class="footer__container">
            <div class="footer__links">
              <div class="footer__links-wrapper">
                <div class="footer__links-items">
                  <h4>About</h4>
                  <a href="/">Blogs</a>
                  <a href="/">Security</a>
                  <a href="/">Features</a>
                </div>
                <div class="footer__links-items">
                  <h4>FAQs</h4>
                  <a href="/">Support</a>
                  <a href="/">Contact</a>
                  <a href="/">Community</a>
                </div>
                <div class="footer__links-items">
                  <h4>Financial Intelligence</h4>
                  <div className="social-media">
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="social-icon"
                        src={facebook}
                        alt="facebook"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="social-icon"
                        src={instagram}
                        alt="instagram"
                      />
                    </a>
                  </div>
                </div>
                <div class="footer__links-items">
                  <div className="socialmedia">
                    <div className="socialContent">
                      <img src={playstore} alt="google playstore" />
                      <img src={applestore} alt="appstore" />
                    </div>
                    <p
                      style={{
                        paddingLeft: 60,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      MyGAPhub is a trading style of PRISM Financial Technology
                      Limited which is registered in England and Wales with
                      company number 12837226. PRISM Financial Technology is
                      pursuing authorisation and regulated status by the
                      Financial Conduct Authority (FCA) as a registered AISP
                      (Account Information Service Provider). ©️MyGAPhub, a
                      PRISM Financial Technology Limited personal finance
                      management platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dividerLine">
              <p>
                Copyright © 2021 MyGAPhub Fintech Platform Privacy Policy |Terms
                and Conditions
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default HomePage;
