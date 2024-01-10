import "./main.css";
import Carousel from "./slider.js";
import MainAdBanner from "./mainAdBanner.js";
import Category from "./category/categoty.js";
import UiSelect from "./selcetUiI/selectUI.js";
import Mainvideo from './video&expected/mainVideo.js';
import Expexted from './video&expected/expected.js';



function Main() {
  return (
    <div className="mainBg"> {/* 메인페이지 배경색, 크기 담당 */}
      <div className="mainDiv"> {/* 메인페이지에 포함되어 있는 컴포넌트 박스 */}
        <div style={{margin: "3vw 0 4vw 0"}}> {/* 이미지 슬라이드 컴포넌트 */}
          <Carousel></Carousel>
        </div>
        <div className="mb-5 container"> {/* 각 카테고리별 공연포스터가 진열된 UI셀렉트 컴포넌트 */}
          <UiSelect></UiSelect>
        </div>
        <div className="mb-5 container"> {/* 광고배너 영역의 컴포넌트 */}
          <MainAdBanner/>
        </div>
        <div className="container"> {/* 각 카테고리를 소개해주는 셀렉트 컴포넌트 */}
          <Category/>
        </div>
        <div className="lastMain pb-5 container"> {/* 공연 티저 영상과 상영이 예정된 공연의 정보가 담긴 컴포넌트 */}
          <Mainvideo/>
          <Expexted></Expexted>
        </div>
      </div>
    </div>
  );
}

export default Main;
