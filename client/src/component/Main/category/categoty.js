import "./category.css";
import { Link } from "react-router-dom";
import concertJpg from "./../images/concert.jpg";
import musicalJpg from "./../images/musical.jpg";
import classicJpg from "./../images/classic.jpg";
import exhibitionJpg from "./../images/exhibition.jpg";
import { useState } from "react";

function Category() {
  let [category, setCategory] = useState([
    {
      id: 1,
      title: "콘서트",
      english: "Concert",
      content: `환상적인 음악과 열정의 축제<br/>화려한 콘서트에여러분을 초대합니다!`,
    },
    {
      id: 2,
      title: "뮤지컬",
      english: "Musical",
      content: `마음을 사로잡는 음악, 멋진 춤과 연기<br />극적인 뮤지컬 세계로 여러분을 초대합니다!`,
    },
    {
      id: 3,
      title: "클래식",
      english: "Classic",
      content: `피아노 소리와 바이올린 멜로디<br />마음을 녹이는 클래식 공연을 즐겨보세요.`,
    },
    {
      id: 4,
      title: "전시회",
      english: "Exhibition",
      content: `창의적 예술과 문화의 향연<br />현대 예술의 아름다움을 만나보세요!`,
    },
  ]); {/* 각 카테고리의 정보가 담긴 state */}
  return (
    <>
      <div className="categoryTitle">카테고리</div> {/* 카테고리 타이틀 */}
      <div className="categoryGridBox"> {/* 카테고리 그리드 박스 */}
        {category.map((a, i) => { {/* 맵함수로 각 category 배열안에 정보들 정렬 */}
          return (
            <Link to="/concert" style={{ textDecoration: "none" }} key={i}>
              <div className={'category' + category[i].english +'Box'}>
                <div className="categortMent">
                  <div className="categortMentTitle">{category[i].title}</div>
                  <div
                    className="categortMentContent"
                    dangerouslySetInnerHTML={{ __html: category[i].content }}
                  ></div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Category;
