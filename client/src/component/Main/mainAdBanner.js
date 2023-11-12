import add from "./images/add.jpg";

function MainAdBanner() { {/* 광고배너 컴포넌트 */}
  return (
    <div>
      <img
        src={add}
        style={{ cursor: "pointer" }}
        width="100%"
      ></img>
    </div>
  );
}

export default MainAdBanner;
