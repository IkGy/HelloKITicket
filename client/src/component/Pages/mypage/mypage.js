import { useState } from "react";
import "./mypage.css";
import Reservation from "./reservation.js";
import jpg1 from "./../../Main/images/concert/1.gif";
import jpg2 from "./../../Main/images/musical/1.gif";
import jpg3 from "./../../Main/images/exhibition/1.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getCookie, removeCookie } from "../../../useCookies";

function Mypage() {
  let [edit, setEdit] = useState(false); //개인정보 수정을 위한 state

  const Logout = (e) => {
    e.preventDefault();
    removeCookie("login");
    navigate("/");
  }; //로그아웃을 가능하게 해주는 함수

  const navigate = useNavigate();

  const newTicket =(e)=>{
    e.preventDefault();
    navigate("/newTicket");
  } //newTicket을 가능하게 해주는 함수

  
  const NewUser = async (e) => {
    e.preventDefault();
    const id = e.target.Nid.value;
    const pwd = e.target.Npwd.value;
    const CKpwd = e.target.CKpwd.value;
    const email = e.target.Nemail.value;
    const name = e.target.Nname.value;
    const phone = e.target.Nphone.value;
    if ((id, pwd, name, email, phone != "")) {
      if (pwd === CKpwd) {
        await axios
          .post(`/user`, { id, pwd, name, email, phone })
          .then(() => {
            console.log("회원가입");
            navigate("/");
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        return alert("비밀번호가 다릅니다");
      }
    } else {
      return alert("전부 입력해주세요");
    }
  }; //회원가입에 필요한 비동기함수

  let [reservation, setReservation] = useState([
    {
      id: 1,
      jpg: jpg1,
      title: "타겟",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
    {
      id: 2,
      jpg: jpg2,
      title: "스즈메의 문단속",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
    {
      id: 3,
      jpg: jpg3,
      title: "놉",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
  ]); //예매내역 임시 데이터
  return (
    <div className="mypageBg">
      <div className="mypage container">
        {edit ? (
          <form className="sform" onSubmit={NewUser}> {/* 개인정보 수정 클릭시 보여주는 폼 */}
            <h3 style={{ fontSize: "2.5vw" }}>개인정보 수정</h3>
            <div className="form-group">
              <label>아이디</label>
              <input
                id="Nid"
                type="text"
                className="noEdit form-control"
                value={getCookie("login")}
                disabled
              />
            </div>

            <div className="form-group">
              <label>비밀번호</label>
              <input
                id="Npwd"
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>

            <div className="form-group">
              <label>비밀번호 확인</label>
              <input
                id="CKpwd"
                type="password"
                className="form-control"
                placeholder="Confirm Password"
              />
            </div>

            <div className="form-group">
              <label>이름</label>
              <input
                id="Nname"
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>

            <div className="form-group">
              <label>이메일</label>
              <input
                id="Nemail"
                type="text"
                className="form-control"
                placeholder="Email"
              />
            </div>

            <div className="form-group">
              <label>전화번호</label>
              <input
                id="Nphone"
                type="text"
                className="form-control"
                placeholder="Phone number"
              />
            </div>

            <div>
              <div>
                <button type="submit" className="btn-signup">
                  수정하기
                </button>
              </div>
            </div>
          </form>
        ) : (
          <> {/* 마이페이지 접속시 보여주는 페이지 */}
            <div className="mainTitle">마이페이지</div> 
            <div className="mypageGridBox">
              <div className="mypageProfile">
                <i class="fa-solid fa-circle-user"></i>
              </div>
              <div className="mypageUserinfo">
                <div className="mypageUserinfoName">{getCookie("login")}님</div>
                <div className="mypageUserinfoBtnBox">
                  <button
                    className="mypageEditBtn"
                    onClick={() => {
                      setEdit(true);
                    }}
                  >
                    개인정보 수정
                  </button>
                  <button className="mypageLogoutBtn" onClick={Logout}>
                    로그아웃
                  </button>
                  <button className="mypageLogoutBtn" onClick={newTicket}>
                    행사등록
                  </button>
                </div>
              </div>
              <div className="haveTicketBoxBg">
                <div className="haveTicketBox">
                  <div className="ticketCount">{reservation.length}</div>
                  <div className="ticketContent">예매내역</div>
                </div>
              </div>
              <div className="haveTicketBoxBg">
                <div className="haveTicketBox">
                  <div className="ticketCount">0</div>
                  <div className="ticketContent">할인쿠폰</div>
                </div>
              </div>
              <div className="haveTicketBoxBg">
                <div className="lastHaveTicketBox">
                  <div className="ticketCount">0</div>
                  <div className="ticketContent">공연예매권</div>
                </div>
              </div>
            </div>
            <Reservation
              reservation={reservation}
              setReservation={setReservation}
            ></Reservation> {/* 예매내역을 보여주는 컴포넌트 */}
          </>
        )}
      </div>
    </div>
  );
}

export default Mypage;
