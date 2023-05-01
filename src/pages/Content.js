import './Content.css';
import React, { useState } from 'react';
import title from '../images/title.png';
import { Link } from 'react-router-dom';

function Content() {
  return (
    <div className="Content">
      <div className="header">
        <img className="title-image" src={title} width={480}/>
        <div className="nav">
          <div>물성 목록</div>
          <div>주제 물성</div>
          <div>부제 물성</div>
          <div>작품</div>
        </div>
      </div>
      <div className="content">
        <div className="propinfo">
          <div className="propimage" />
          <div className="proptext">
            2주차 수업<br />종이
          </div>
        </div>
        <div className="cards">
          <div className="cardwrap">
            <div className="cardtitle">객관적 정보</div>
            <div className="card"></div>
          </div>
          <div className="cardwrap">
            <div className="cardtitle">관찰과 체험으로 얻은 정보</div>
            <div className="card"></div>
          </div>
          <div className="cardwrap">
            <div className="cardtitle">예상외의 정보</div>
            <div className="card"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content;