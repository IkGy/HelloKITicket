import React from "react";
import { useState, useEffect } from "react";
import "./musical.css";
import musical1 from "./../../Main/images/musical/1.gif";
import musical2 from "./../../Main/images/musical/2.gif";
import musical3 from "./../../Main/images/musical/3.gif";
import musical4 from "./../../Main/images/musical/4.gif";
import jpg1 from "./../../Main/images/musical/1.gif";
import jpg2 from "./../../Main/images/musical/2.gif";
import jpg3 from "./../../Main/images/musical/3.gif";
import jpg4 from "./../../Main/images/musical/4.gif";
import jpg5 from "./../../Main/images/musical/5.gif";
import jpg6 from "./../../Main/images/musical/6.gif";
import jpg7 from "./../../Main/images/musical/7.gif";
import jpg8 from "./../../Main/images/musical/8.gif";
import jpg9 from "./../../Main/images/musical/9.gif";
import jpg10 from "./../../Main/images/musical/10.gif";

function Musical() {
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

  let [musical, setMusical] = useState([
    {
      id: 1,
      title: "타겟",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
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

  let mainMusical = [
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
      <div className="musical container">
      <div className='mainTitle'>뮤지컬</div>
        <div className="Junho_musicalGridBox"> {/* 달의 공연을 보여주는 컴포넌트 */}
          <div className="Junho_musicalImgBox">
            <img src={musical1} />
            <div className="Junho_musicalContentBox">
              <div className="Junho_mainMusicalTitle">
                {mainMusical[0].title.length > 13
                  ? `${mainMusical[0].title.substring(0, 13)}...`
                  : mainMusical[0].title}
              </div>
              <div className="Junho_mainMusicalDetail">
              {mainMusical[0].content.length > 15
                  ? `${mainMusical[0].content.substring(0, 15)}...`
                  : mainMusical[0].content}
              </div>
            </div>
          </div>
          <div className="Junho_musicalImgBox">
            <img src={musical2} />
            <div className="Junho_musicalContentBox">
              <div className="Junho_mainMusicalTitle">
              {mainMusical[1].title.length > 13
                  ? `${mainMusical[1].title.substring(0, 13)}...`
                  : mainMusical[1].title}
              </div>
              <div className="Junho_mainMusicalDetail">
              {mainMusical[1].content.length > 18
                  ? `${mainMusical[1].content.substring(0, 18)}...`
                  : mainMusical[1].content}
              </div>
            </div>
          </div>
          <div className="Junho_musicalImgBox">
            <img src={musical3} />
            <div className="Junho_musicalContentBox">
              <div className="Junho_mainMusicalTitle">
              {mainMusical[2].title.length > 13
                  ? `${mainMusical[2].title.substring(0, 13)}...`
                  : mainMusical[2].title}
              </div>
              <div className="Junho_mainMusicalDetail">
              {mainMusical[2].content.length > 18
                  ? `${mainMusical[2].content.substring(0, 18)}...`
                  : mainMusical[2].content}
              </div>
            </div>
          </div>
          <div className="Junho_musicalImgBox">
            <img src={musical4} />
            <div className="Junho_musicalContentBox">
              <div className="Junho_mainMusicalTitle">
              {mainMusical[3].title.length > 13
                  ? `${mainMusical[3].title.substring(0, 13)}...`
                  : mainMusical[3].title}
              </div>
              <div className="Junho_mainMusicalDetail">{mainMusical[3].content.length > 15
                  ? `${mainMusical[3].content.substring(0, 15)}...`
                  : mainMusical[3].content}</div>
            </div>
          </div>
        </div>
        <div className="mainTitle">전체 전시회</div>
        <div className="musicalBtnBox"> {/* 공연정보를 가로로 보여줄지 세로로 보여줄지 결정해주는 아이콘 박스 */}
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
          <div className="musicalBox1"> {/* ui state가 1일때 세로로 공연정보 정렬 */}
            <div className="musicalBox1Header">
              <div></div>
              <div>공연명</div>
              <div>공연일시</div>
              <div>공연장소</div>
            </div>
            {img.map((a, i) => {
              return (
                <div className="musicalBox1card">
                  <img className="musicalBox1Img" src={img[i]}></img>
                  <div className="musicalBox1Intro">
                    <div className="musicalBox1Title">{musical[i].title}</div>
                    <div className="musicalBox1Content">
                      - 전시회 간단한 설명
                    </div>
                  </div>

                  <div className="musicalBox1Date">
                    {musical[i].startDate}
                    <br />~<br />
                    {musical[i].endDate}
                  </div>
                  <div className="musicalBox1Location">
                    {musical[i].location}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="musicalBox2"> {/* ui state가 1이 아닐 때 가로로 공연정보 정렬 */}
            {img.map((a, i) => {
              return (
                <div className="musicalCard">
                  <img src={img[i]}></img>
                  <div className="musicalTitle container">
                    {musical[i].title}
                  </div>
                  <div className="musicalLocation container">
                    {musical[i].location}
                  </div>
                  <div className="musicalDate container">
                    {musical[i].startDate} ~ {musical[i].endDate}
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

export default Musical;
