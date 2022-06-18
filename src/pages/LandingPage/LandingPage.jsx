import React from "react";
import Timer from "../../components/Timer/Timer";

import Header from "./components/Header/Header";
import Newsletter from "./components/Newsletter/Newsletter";

import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="landingPage-overlay">
        <Header />
        <div className="landingPage-content">
          <div className="left">
            <div className="left-content">
              <div className="left-content-header">DigiCord</div>
              <div className="left-content-caption">
                Your No. 1 Medical Records Assistant is{" "}
                <span>coming soon!!!</span>
              </div>
              <div className="left-content-timer">
                <Timer />
              </div>
            </div>
          </div>
          <div className="right">
            <Newsletter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
