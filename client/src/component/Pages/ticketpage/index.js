import React, { useState } from "react";
import "./ticketpage.css";
import Main_Hero from "./images/main_hero.png";
import ShowInfo from "./showinfo/";
import SalesInfo from "./salesinfo/";

const TicketPage = () => { {/* 티켓상세정보 페이지 컴포넌트 */}
  const ticketDetails = {
    title: "티켓 정보",
    posterUrl: Main_Hero,
  };

  const [selectedSection, setSelectedSection] = useState("공연정보");

  const showAdditionalInfo = () => {
    if (selectedSection === "공연정보") {
      return <ShowInfo />;
    } else if (selectedSection === "판매정보") {
      return <SalesInfo />;
    } else {
      return null;
    }
  };

  let [info, setInfo] = useState([
    { title: "장소", content: "서울특별시 송파구" },
    { title: "공연기간", content: "2023.10.10 ~ 2023.11.13" },
    { title: "공연시간", content: "2시간" },
    { title: "관람연령", content: "만 19세" },
    { title: "혜택", content: "국제대생 무료" },
    { title: "배송", content: "CJ대한통운" },
  ]);

  return (
    <div className="ticketpageBg">
      <div className="p_all container">
        <div className="hd_ps_info">
          <div className="hd_name">
            <div>{ticketDetails.title}</div>
          </div>
          <div className="hd_ps_infoBox">
            <img
              className="hd_poster"
              alt={ticketDetails.title}
              src={ticketDetails.posterUrl}
            />
            <div className="ps_all">
              <div className="poster_info">
                <div className="poster_info_title">IM HERO (TOUR 2023)</div>
                <div className="poster_info_gridBox">
                  {info.map((a, i) => {
                    return (
                      <div className="info_gridBox">
                        <div className="info_title">{info[i].title}</div>
                        <div className="info_content">{info[i].content}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="pricereserveBox">
                  <div className="ticketPrice">티켓 구매가: 30000원</div>
                  <div className="reserveBtnBox">
                    <div className="reserveBtn">예매하기</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-section">
          <button
            className={selectedSection === "공연정보" ? "active" : ""}
            onClick={() => setSelectedSection("공연정보")}
          > 
            공연정보
          </button> {/* 버튼 클릭시 공연정보를 보여줌 */}
          <button
            className={selectedSection === "판매정보" ? "active" : ""}
            onClick={() => setSelectedSection("판매정보")}
          >
            판매정보
          </button> {/* 버튼 클릭시 판매정보를 보여줌 */}
        </div>
        {showAdditionalInfo()} {/* 공연정보 또는 판매정보를 보여주는 영역 */}
      </div>
    </div>
  );
};

export default TicketPage;
