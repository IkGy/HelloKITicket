import "./v&e.css";
import jpg1 from "./../images/concert/10.gif";
import jpg2 from "./../images/concert/9.gif";
import jpg3 from "./../images/musical/10.gif";
import jpg4 from "./../images/musical/9.gif";
import jpg5 from "./../images/exhibition/10.jpg";
import jpg6 from "./../images/exhibition/9.jpg";

function Expexted() {
  const images = [jpg1, jpg2, jpg3, jpg4, jpg5, jpg6];
  return (
    <div className="mainExpectedBox">
      <div className="mainTitle" style={{ fontSize: "2.5vw" }}>
        상영 예정
      </div>
      <div className="expextedListBox"> {/* 상영예정될 공연을 보여주는 리스트 박스 */}
        {images.map((a, i) => {
          return (
            <div className="expextedList">
              <img src={images[i]} alt=""></img>
              <div className="expextedContent">
                2023년 11월 13일 <br></br>상영 예정
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Expexted;
