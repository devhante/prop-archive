import "./Content.css";
import React, { useState } from "react";
import title from "../images/title.png";
import { Link, useParams } from "react-router-dom";
import { getPropName, getPropImage, getContents } from "../data";

function Content() {
  let { code } = useParams();
  const week = code[0];
  const page = code[1];

  const contents = getContents(week, page === "1");
  const propImage = getPropImage(week, page === "1");

  return (
    <div className="Content">
      <div className="header">
        <Link to="/">
          <img className="title-image" src={title} width={480} />
        </Link>
        <div className="nav">
          <Link to="/">
            <div>물성 목록</div>
          </Link>
          <Link to={"/" + week + "1"}>
            <div className={page === "1" ? "active" : ""}>주제 물성</div>
          </Link>
          <Link to={"/" + week + "2"}>
            <div className={page === "2" ? "active" : ""}>부제 물성</div>
          </Link>
          <Link to={"/" + week + "3"}>
            <div className={page === "3" ? "active" : ""}>작품</div>
          </Link>
        </div>
      </div>
      <div className="content">
        <div className="propinfo">
          <div
            className="propimage"
            style={{ backgroundImage: `url(${propImage})` }}
          />
          <div className="proptext">
            {week}주차 수업
            <br />
            {getPropName(week, page === "1")}
          </div>
        </div>
        <div className="cards">
          <div className="cardwrap">
            <div className="cardtitle">객관적 정보</div>
            <div className="card">
              <ul>
                {contents[0].map((value, key) => (
                  <li key={key}>{value}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="cardwrap">
            <div className="cardtitle">관찰과 체험으로 얻은 정보</div>
            <div className="card">
              <ul>
                {contents[1].map((value, key) => (
                  <li key={key}>{value}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="cardwrap">
            <div className="cardtitle">예상외의 정보</div>
            <div className="card">
              <ul>
                {contents[2].map((value, key) => (
                  <li key={key}>{value}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
