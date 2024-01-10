function Responsive(props) {
  
  const cancelReservation = (id) => {
    const updatedReservation = props.reservation.filter((item) => item.id !== id);
    props.setReservation(updatedReservation);
  }; //삭제버튼 클릭시 props.reservation 배열안의 모든 id값과 클릭한 id값을 비교하여 같으면 배열에서 제거

  return (
    <div className="reservation">
      <div className="mainTitle">최근 예매/취소</div>
      {props.reservation != "" ? <div className="reservationBox1"> {/* props.reservation배열에 값이 있으면 예매내역 출력 */}
        {props.reservation.map((a, i) => {
          return (
            <div className="reservationBox1card" key={i}>
              <img
                className="reservationBox1Img"
                src={props.reservation[i].jpg}
              ></img>
              <div className="reservationBox1Intro">
                <div className="reservationBox1Title">
                  {props.reservation[i].title}
                </div>
                <div className="reservationBox1Content">
                  - 전시회 간단한 설명
                </div>
              </div>

              <div className="reservationBox1Date">
                {props.reservation[i].startDate}
                <br />~<br />
                {props.reservation[i].endDate}
              </div>
              <div className="reservationBox1Location">
                {props.reservation[i].location}
              </div>
              <div
                className="reservationCancel"
                onClick={() => cancelReservation(a.id)}
              >
                취소
              </div>
            </div>
          );
        })}
      </div> : <div className="reservationBox1 noReservationContent"> {/* props.reservation배열에 값이 없으면 출력 */}
        확인된 예매 내역이 없습니다...
      </div>}
    </div>
  );
}

export default Responsive;
