import "./Home.css";
import React, { useState } from "react";
import title from "../images/title.png";
import { Link } from "react-router-dom";

import image11 from "../images/11.jpg";
import image21 from "../images/21.jpg";
import image31 from "../images/31.jpg";
import image41 from "../images/41.png";
import image51 from "../images/51.jpg";
import image61 from "../images/61.jpg";
import image71 from "../images/71.jpg";
import image81 from "../images/81.jpg";
import image91 from "../images/91.png";

function Home() {
  return (
    <div className="Home">
      <div className="header">
        <img className="title-image" src={title} width={480} />
      </div>
      <div className="content">
        <div className="prop-button-group">
          <Link to="/11">
            <div
              className="prop-button"
              style={{ backgroundImage: `url(${image11})` }}
            ></div>
          </Link>
          <Link to="/21">
            <div
              className="prop-button"
              style={{ backgroundImage: `url(${image21})` }}
            ></div>
          </Link>
          <Link to="/31">
            <div
              className="prop-button"
              style={{ backgroundImage: `url(${image31})` }}
            ></div>
          </Link>
          <Link to="/41">
            <div
              className="prop-button"
              style={{ backgroundImage: `url(${image41})` }}
            ></div>
          </Link>
          <Link to="/51">
            <div
              className="prop-button"
              style={{ backgroundImage: `url(${image51})` }}
            ></div>
          </Link>
        </div>
        <div className="prop-button-group">
          <Link to="/61">
            <div
              className="prop-button"
              style={{ backgroundImage: `url(${image61})` }}
            ></div>
          </Link>
          <Link to="/71">
            <div
              className="prop-button"
              style={{ backgroundImage: `url(${image71})` }}
            ></div>
          </Link>
          <Link to="/81">
            <div
              className="prop-button"
              style={{ backgroundImage: `url(${image81})` }}
            ></div>
          </Link>
          <Link to="/91">
            <div
              className="prop-button"
              style={{ backgroundImage: `url(${image91})` }}
            ></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
