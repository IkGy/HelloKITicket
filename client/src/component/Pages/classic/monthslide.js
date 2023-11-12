import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import jpg1 from "./../../Main/images/classic/1.gif";
import jpg2 from "./../../Main/images/classic/2.gif";
import jpg3 from "./../../Main/images/classic/3.gif";
import jpg4 from "./../../Main/images/classic/4.gif";
import jpg5 from "./../../Main/images/classic/5.gif";
import { useState } from 'react';

const MonthCarousel = () => { {/* 달의 공연정보 이미지 슬라이드 컴포넌트 */}
  const responsive = {
    0: {
      items: 4,
    },
    512: {
      items: 4,
    },
  };

  // const handleDragStart = (e) => e.preventDefault();

    let [img, setImg] = useState([
      jpg1,
      jpg2,
      jpg3,
      jpg4,
      jpg5,
    ]);

  let [monthClassic, setmonthClassic] = useState([
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
  ]);

  const items = monthClassic.map((image, i) => { 
    return (
      <ItemsContain>
        <ItemsWrap>
          <div className="classicCard">
            <img src={img[i]}></img>
            <div className="classicTitle container">
              {monthClassic[i].title}
            </div>
            <div className="classicLocation container">
              {monthClassic[i].location}
            </div>
          </div>
        </ItemsWrap>
      </ItemsContain>
    );
  });

  return (
    <>
      <div className="mainTitle">이달의 클래식</div>
      <div className="mb-5 monthClassicBox">
        <Contain>
          <AliceCarousel
            mouseTracking
            infinite={1000}
            animationDuration={3000}
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            autoPlay
            items={items}
            paddingRight={40}
          />
        </Contain>
      </div>
    </>
  );
};
export default MonthCarousel;


const Contain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const ItemsContain = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1vw;
`;

const ItemsWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0 20px;
  font-family: "DNFBitBitv2";
  border-radius: 5px;

  img {
    width: 100%;
    height: 18vw;
    object-fit: cover;
    border-radius: 5px;
  }
`;
