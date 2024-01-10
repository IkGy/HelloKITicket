import jpg1 from "./../../Main/images/exhibition/1.jpg";
import jpg2 from "./../../Main/images/exhibition/2.jpg";
import jpg3 from "./../../Main/images/exhibition/3.jpg";
import jpg4 from "./../../Main/images/exhibition/4.jpg";
import jpg5 from "./../../Main/images/exhibition/5.jpg";
import jpg6 from "./../../Main/images/exhibition/6.jpg";
import jpg7 from "./../../Main/images/exhibition/7.jpg";
import jpg8 from "./../../Main/images/exhibition/8.jpg";
import jpg9 from "./../../Main/images/exhibition/9.jpg";
import jpg10 from "./../../Main/images/exhibition/10.jpg";
import "./exhibition.css";
import { useState, useEffect } from "react";
import MonthCarousel from "./monthslide.js"

function Exhibition() {
  
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

  let [exhibition, setExhibition] = useState([
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
      <div className="exhibition container">
        <MonthCarousel></MonthCarousel>
        <div className="mainTitle">전체 전시회</div>
        <div className="exhibitionBtnBox"> {/* 공연정보를 가로로 보여줄지 세로로 보여줄지 결정해주는 아이콘 박스 */}
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
          <div className="exhibitionBox1"> {/* ui state가 1일때 세로로 공연정보 정렬 */}
            <div className="exhibitionBox1Header">
              <div></div>
              <div>공연명</div>
              <div>공연일시</div>
              <div>공연장소</div>
            </div>
            {img.map((a, i) => {
              return (
                <div className="exhibitionBox1card">
                  <img className="exhibitionBox1Img" src={img[i]} loading="lazy"></img>
                  <div className="exhibitionBox1Intro">
                    <div className="exhibitionBox1Title">
                      {exhibition[i].title}
                    </div>
                    <div className="exhibitionBox1Content">
                      - 전시회 간단한 설명
                    </div>
                  </div>

                  <div className="exhibitionBox1Date">
                    {exhibition[i].startDate}
                    <br />~<br />
                    {exhibition[i].endDate}
                  </div>
                  <div className="exhibitionBox1Location">
                    {exhibition[i].location}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="exhibitionBox2"> {/* ui state가 1이 아닐 때 가로로 공연정보 정렬 */}
            {img.map((a, i) => {
              return (
                <div className="exhibitionCard">
                  <img src={img[i]} loading="lazy"></img>
                  <div className="exhibitionTitle container">
                    {exhibition[i].title}
                  </div>
                  <div className="exhibitionLocation container">
                    {exhibition[i].location}
                  </div>
                  <div className="exhibitionDate container">
                    {exhibition[i].startDate} ~ {exhibition[i].endDate}
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

export default Exhibition;
