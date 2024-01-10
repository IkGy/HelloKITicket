import { useEffect, useState } from "react";
import jpg1 from "./../images/musical/1.gif";
import jpg2 from "./../images/musical/2.gif";
import jpg3 from "./../images/musical/3.gif";
import jpg4 from "./../images/musical/6.gif";

function PushMusical() {
  let push = [jpg1, jpg2, jpg3, jpg4]; // 로그인 모달창 등장시 등장애내메이션을 담당하는 useEffect
  let [end, setEnd] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setEnd("end");
    }, 100);
    return setEnd("");
  }, []); // 컴포넌트 mount 시 등장애내메이션을 담당하는 useEffect

  return (
    <div className={"selcetBox"}> {/* 셀렉트UI의 공연 리스트 */}
      <div className={"start " + end}>
        <img src={push[0]}></img>
        <img src={push[1]}></img>
        <img src={push[2]}></img>
        <img src={push[3]}></img>
      </div>
    </div>
  );
}

export default PushMusical;
