import React from "react";
import "./footer.css";

const footer = () => {
  return (
    <div className='footerBox'> {/* 회사정보가 포함된 풋터 영역 */}
      <div id="footer">
        <div id="footer-copy">
          <ul>
            <li>홈</li>
            <li>헬로키티켓 안내</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
          </ul>
        </div>
        <div id="footer-address">
          <span>㈜헬로키티켓</span>
          <span>서울특별시 용산구 남산공원길 105</span>
          <span>사업자 등록번호 : 101-202-30303</span>
          <br />
          <span>통신판매업신고번호 : 2023-남산타워B-0003</span>
          <span>고객센터(평일/주말 09:00~18:00) : 1011-0220</span>
          <br />
          <span>© Kitiket Entertainment Corp.</span>
        </div>
      </div>
    </div>
  );
};

export default footer;
