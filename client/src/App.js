import "./App.css";
import Header from "./component/Header/header.js";
import ScrollToTopButton from './topbtn.js'
import Main from "./component/Main/main.js";
import Concert from "./component/Pages/concert/concert.js";
import Musical from "./component/Pages/musical/musical.js";
import Classic from "./component/Pages/classic/classic.js";
import Exhibition from "./component/Pages/exhibition/exhibition.js";
import Ranking from "./component/Pages/ranking/ranking.js";
import Event from "./component/Pages/event/event.js";
import EventDetail from "./component/Pages/event/eventdetail.js";
import Register from "./component/Pages/register/register.js";
import Mypage from "./component/Pages/mypage/mypage.js";
import Footer from "./component/Footer/footer.js";
import NewTicket from "./component/Pages/newTicket/newTicket.js"
import TicketPage from "./component/Pages/ticketpage/index.js"
import Create from "./component/Pages/create/create.js"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header></Header> {/* '로고, 검색창, 로그인, 회원가입, 메뉴바가 포함된 헤더영역' */}
      <ScrollToTopButton></ScrollToTopButton> {/* '일정 스크롤은 내리면 스크롤을 맨 위로 올려주는 버튼 컴포넌트' */}
      <Routes> {/* '헤더 아래 보여줄 페이지' */}
        <Route path="/" element={<Main></Main>}></Route> {/* '사이트 맨 아래 풋터' */}
        <Route path="/concert" element={<Concert></Concert>}></Route> {/* '콘서트 리스트가 보이는 페이지' */}
        <Route path="/musical" element={<Musical></Musical>}></Route> {/* '뮤지컬 리스트가 보이는 페이지' */}
        <Route path="/classic" element={<Classic></Classic>}></Route> {/* '클래식 리스트가 보이는 페이지' */}
        <Route path="/exhibition" element={<Exhibition></Exhibition>}></Route> {/* '전시회 리스트가 보이는 페이지' */}
        <Route path="/ranking" element={<Ranking></Ranking>}></Route> {/* '콘서트, 뮤지컬, 클래식, 전시회의 랭킹이 보이는 페이지' */}
        <Route path="/event" element={<Event></Event>}></Route> {/* '사이트 공지사항 리스트가 보이는 페이지' */}
        <Route path="/eventCreate" element={<Create></Create>}></Route> {/* '공지사항을 등록하는 페이지' */}
        <Route path="/event/:id" element={ <EventDetail></EventDetail>}></Route> {/* '파람스를 이용하여 공지사항의 상세내용이 보이는 페이지' */}
        <Route path="/register" element={<Register></Register>}></Route> {/* '회원가입 폼창이 보이는 페이지' */}
        <Route path="/mypage" element={<Mypage></Mypage>}></Route> {/* '로그인시 자신의 개인정보 및 예매 정보가 보이는 페이지' */}
        <Route path="/newTicket" element={<NewTicket></NewTicket>}></Route> {/* '티켓을 등록하는 페이지' */}
        <Route path="/ticketpage" element={<TicketPage></TicketPage>}></Route> {/* '티켓의 상세정보가 보이는 페이지' */}
      </Routes>
      <Footer></Footer> {/* '사이트 맨 아래 회사정보가 입력된 풋터영역' */}
    </div>
  );
}

export default App;