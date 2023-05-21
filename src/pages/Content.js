import "./Content.css";
import React, { useCallback, useEffect, useRef, useState } from "react";
import title from "../images/title.png";
import { Link, useParams } from "react-router-dom";
import {
  getPropName,
  getPropImage,
  getContents,
  getCardText,
  getCardImage,
  getCardImages,
} from "../data";
import SimpleImageSlider from "react-simple-image-slider";

function Content() {
  let { code } = useParams();
  const week = code[0];
  const page = code[1];

  const [imageslider, setImageslider] = useState(false);

  const contents = getContents(week, page === "1");
  const propImage = getPropImage(week, page === "1");
  const cardImage = getCardImage(week);
  const cardImages = getCardImages(week);

  const handleClickCardimage = () => {
    setImageslider(true);
  };

  const ref = useRef();
  useOnClickOutside(ref, () => {
    setImageslider(false);
    console.log("click");
  });

  function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = (event) => {
          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      // Add ref and handler to effect dependencies
      // It's worth noting that because passed in handler is a new ...
      // ... function on every render that will cause this effect ...
      // ... callback/cleanup to run every render. It's not a big deal ...
      // ... but to optimize you can wrap handler in useCallback before ...
      // ... passing it into this hook.
      [ref, handler]
    );
  }

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
      {page === "1" || page === "2" ? (
        <div className="content">
          <div className="propinfo">
            <div
              className="propimage"
              style={{ backgroundImage: `url(${propImage})` }}
            />
            <div className="proptext">
              {Number(week) + 1}주차 수업
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
      ) : (
        <div className="content">
          <div className="card">
            <div
              className="cardimage"
              style={{ backgroundImage: `url(${cardImage})` }}
              onClick={handleClickCardimage}
            ></div>
            <div className="space" />
            <div className="cardtext">{getCardText(week)}</div>
          </div>
        </div>
      )}
      {imageslider ? (
        <div className="imageslider">
          <div className="imageslider-wrap" ref={ref}>
            <SimpleImageSlider
              width={600}
              height={600}
              images={cardImages}
              showBullets={true}
              showNavs={true}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Content;
