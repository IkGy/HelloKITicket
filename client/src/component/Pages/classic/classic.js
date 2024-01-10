import jpg1 from "./../../Main/images/classic/1.gif";
import jpg2 from "./../../Main/images/classic/2.gif";
import jpg3 from "./../../Main/images/classic/3.gif";
import jpg4 from "./../../Main/images/classic/4.gif";
import jpg5 from "./../../Main/images/classic/5.gif";
import jpg6 from "./../../Main/images/classic/6.gif";
import jpg7 from "./../../Main/images/classic/7.gif";
import jpg8 from "./../../Main/images/classic/8.gif";
import jpg9 from "./../../Main/images/classic/9.gif";
import jpg10 from "./../../Main/images/classic/10.gif";
import "./classic.css";
import { useState, useEffect } from "react";
import MonthCarousel from "./monthslide.js"

function Classic() {
  
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

  let [classic, setClassic] = useState([
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

  return (
    <div className="Bg">
      <div className="classic container">
        <MonthCarousel></MonthCarousel> {/* 달의 클래식 공연을 보여주는 컴포넌트 */}
        <div className="mainTitle">전체 클래식</div>
        <div className="classicBtnBox"> {/* 공연정보를 가로로 보여줄지 세로로 보여줄지 결정해주는 아이콘 박스 */}
          <i
            className="fa-solid fa-bars"
            style={{
              border:
                ui == 1 ? '3px solid rgb(226, 48, 74)' : "",
              color:
                ui == 1 ? 'rgb(226, 48, 74)' : ""
            }}
            onClick={() => {
              setUi(1);
            }}
          ></i>
          <i
            className="fa-solid fa-border-all"
            style={{
              border:
                ui != 1 ? '3px solid rgb(226, 48, 74)' : "",
              color:
                ui != 1 ? 'rgb(226, 48, 74)' : ""
            }}
            onClick={() => {
              setUi(2);
            }}
          ></i>
        </div>

        {ui == 1 ? (
          <div className="classicBox1"> {/* ui state가 1일때 세로로 공연정보 정렬 */}
            <div className="classicBox1Header">
              <div></div>
              <div>공연명</div>
              <div>공연일시</div>
              <div>공연장소</div>
            </div>
            {img.map((a, i) => {
              return (
                <div className="classicBox1card">
                  <img className="classicBox1Img" src={img[i]}></img>
                  <div className="classicBox1Intro">
                    <div className="classicBox1Title">
                      {classic[i].title}
                    </div>
                    <div className="classicBox1Content">
                      - 클래식 간단한 설명
                    </div>
                  </div>

                  <div className="classicBox1Date">
                    {classic[i].startDate}
                    <br />~<br />
                    {classic[i].endDate}
                  </div>
                  <div className="classicBox1Location">
                    {classic[i].location}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="classicBox2"> {/* ui state가 1이 아닐 때 가로로 공연정보 정렬 */}
            {img.map((a, i) => {
              return (
                <div className="classicCard">
                  <img src={img[i]}></img>
                  <div className="classicTitle container">
                    {classic[i].title}
                  </div>
                  <div className="classicLocation container">
                    {classic[i].location}
                  </div>
                  <div className="classicDate container">
                    {classic[i].startDate} ~ {classic[i].endDate}
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

export default Classic;
