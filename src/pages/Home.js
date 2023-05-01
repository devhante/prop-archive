import './Home.css';
import React, { useState } from 'react';
import title from '../images/title.png';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div className="Home">
      <div className="header">
        <img className="title-image" src={title} width={480}/>
      </div>
      <div className="content">
        <div className="prop-button-group">
          <Link to="/1">
            <div className="prop-button"></div>
          </Link>
          <Link to="/2">
            <div className="prop-button"></div>
          </Link>
          <Link to="/3">
            <div className="prop-button"></div>
          </Link>
          <Link to="/4">
            <div className="prop-button"></div>
          </Link>
          <Link to="/5">
            <div className="prop-button"></div>
          </Link>
        </div>
        <div className="prop-button-group">
          <Link to="/6">
            <div className="prop-button"></div>
          </Link>
          <Link to="/7">
            <div className="prop-button"></div>
          </Link>
          <Link to="/8">
            <div className="prop-button"></div>
          </Link>
          <Link to="/9">
            <div className="prop-button"></div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;