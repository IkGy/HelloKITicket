import React from "react";
import { useState, useEffect } from "react";
import "./concert.css";
import concert1 from "../ticketpage/images/main_hero.png";
import concert2 from "./../../Main/images/concert/2.jpg";
import concert3 from "./../../Main/images/concert/3.gif";
import concert4 from "./../../Main/images/concert/4.gif";
import jpg1 from "./../../Main/images/concert/1.gif";
import jpg2 from "./../../Main/images/concert/2.jpg";
import jpg3 from "./../../Main/images/concert/3.gif";
import jpg4 from "./../../Main/images/concert/4.gif";
import jpg5 from "./../../Main/images/concert/5.gif";
import jpg6 from "./../../Main/images/concert/6.gif";
import jpg7 from "./../../Main/images/concert/7.gif";
import jpg8 from "./../../Main/images/concert/8.gif";
import jpg9 from "./../../Main/images/concert/9.gif";
import jpg10 from "./../../Main/images/concert/10.gif";

import { useNavigate } from "react-router-dom";




function Concert() {
  const navigate = useNavigate();

  const ToTicket = ()=>{
    navigate("/ticketpage");
  }

  let [img, setImg] = useState([
    jpg1,
    jpg2,
    jpg3,
    jpg4,
    jpg5,
    jpg6,
    jpg7,
    jpg8,
    jpg9,
    jpg10,
  ]); {/* 이미지가 담긴 배열 state */}

  let [concert, setConcert] = useState([
    {
      id: 1,
      title: "IM HERO",
      startDate: "2023-10-10",
      endDate: "2023-11-13",
      location: "서울특별시 송파구",
    },
    {
      id: 2,
      title: "스즈메의 문단속",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
    {
      id: 3,
      title: "놉",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
    {
      id: 4,
      title: "백두산",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
    {
      id: 5,
      title: "범죄와의 전쟁",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
    {
      id: 6,
      title: "부산행",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
    {
      id: 7,
      title: "롤드컵",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
    {
      id: 8,
      title: "반도",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
    {
      id: 9,
      title: "군함도",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
    {
      id: 10,
      title: "1987",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
  ]); {/* 클래식 공연 정보가 담긴 state */}
  let [ui, setUi] = useState(1); {/* 세로 또는 가로로 공연을 보여줄지 판단하는 state*/}

  let mainConcert = [
    {
      id: 1,
      title: "정동원",
      content: "JEONG DONG WON’S 3rd CHRISTMAS CONCERT",
    },
    {
      id: 2,
      title: "GOD",
      content: "god`s MASTERPIECE",
    },
    {
      id: 3,
      title: "지우림",
      content: "Midnight Express",
    },
    {
      id: 4,
      title: "Daniel Caesar",
      content: "Superpowers World Tour - Leg 3",
    },
  ]; {/* 달의 공연 정보 */}
  return (
    <div className="Bg">
      <div className="concert container">
      <div className='mainTitle'>콘서트</div>
        <div className="jsw_concertGridBox"> {/* 달의 공연을 보여주는 컴포넌트 */}
          <div className="jsw_concertImgBox" onClick={ToTicket}>
            <img src={concert1} />
            <div className="jsw_concertContentBox">
              <div className="jsw_mainConcertTitle">
                {mainConcert[0].title.length > 13
                  ? `${mainConcert[0].title.substring(0, 13)}...`
                  : mainConcert[0].title}
              </div>
              <div className="jsw_mainConcertDetail">
              {mainConcert[0].content.length > 15
                  ? `${mainConcert[0].content.substring(0, 15)}...`
                  : mainConcert[0].content}
              </div>
            </div>
          </div>
          <div className="jsw_concertImgBox">
            <img src={concert2} />
            <div className="jsw_concertContentBox">
              <div className="jsw_mainConcertTitle">
              {mainConcert[1].title.length > 13
                  ? `${mainConcert[1].title.substring(0, 13)}...`
                  : mainConcert[1].title}
              </div>
              <div className="jsw_mainConcertDetail">
              {mainConcert[1].content.length > 18
                  ? `${mainConcert[1].content.substring(0, 18)}...`
                  : mainConcert[1].content}
              </div>
            </div>
          </div>
          <div className="jsw_concertImgBox">
            <img src={concert3} />
            <div className="jsw_concertContentBox">
              <div className="jsw_mainConcertTitle">
              {mainConcert[2].title.length > 13
                  ? `${mainConcert[2].title.substring(0, 13)}...`
                  : mainConcert[2].title}
              </div>
              <div className="jsw_mainConcertDetail">
              {mainConcert[2].content.length > 18
                  ? `${mainConcert[2].content.substring(0, 18)}...`
                  : mainConcert[2].content}
              </div>
            </div>
          </div>
          <div className="jsw_concertImgBox">
            <img src={concert4} />
            <div className="jsw_concertContentBox">
              <div className="jsw_mainConcertTitle">
              {mainConcert[3].title.length > 13
                  ? `${mainConcert[3].title.substring(0, 13)}...`
                  : mainConcert[3].title}
              </div>
              <div className="jsw_mainConcertDetail">{mainConcert[3].content.length > 15
                  ? `${mainConcert[3].content.substring(0, 15)}...`
                  : mainConcert[3].content}</div>
            </div>
          </div>
        </div>
        <div className="mainTitle">전체 전시회</div>
        <div className="concertBtnBox"> {/* 공연정보를 가로로 보여줄지 세로로 보여줄지 결정해주는 아이콘 박스 */}
          <i
            className="fa-solid fa-bars"
            style={{
              border: ui == 1 ? "3px solid rgb(226, 48, 74)" : "",
              color: ui == 1 ? "rgb(226, 48, 74)" : "",
            }}
            onClick={() => {
              setUi(1);
            }}
          ></i>
          <i
            className="fa-solid fa-border-all"
            style={{
              border: ui != 1 ? "3px solid rgb(226, 48, 74)" : "",
              color: ui != 1 ? "rgb(226, 48, 74)" : "",
            }}
            onClick={() => {
              setUi(2);
            }}
          ></i>
        </div>

        {ui == 1 ? (
          <div className="concertBox1"> {/* ui state가 1일때 세로로 공연정보 정렬 */}
            <div className="concertBox1Header">
              <div></div>
              <div>공연명</div>
              <div>공연일시</div>
              <div>공연장소</div>
            </div>
            {img.map((a, i) => {
              return (
                <div className="concertBox1card">
                  <img className="concertBox1Img" src={img[i]}></img>
                  <div className="concertBox1Intro">
                    <div className="concertBox1Title">{concert[i].title}</div>
                    <div className="concertBox1Content">
                      - 전시회 간단한 설명
                    </div>
                  </div>

                  <div className="concertBox1Date">
                    {concert[i].startDate}
                    <br />~<br />
                    {concert[i].endDate}
                  </div>
                  <div className="concertBox1Location">
                    {concert[i].location}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="concertBox2"> {/* ui state가 1이 아닐 때 가로로 공연정보 정렬 */}
            {img.map((a, i) => {
              return (
                <div className="concertCard">
                  <img src={img[i]}></img>
                  <div className="concertTitle container">
                    {concert[i].title}
                  </div>
                  <div className="concertLocation container">
                    {concert[i].location}
                  </div>
                  <div className="concertDate container">
                    {concert[i].startDate} ~ {concert[i].endDate}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Concert;
