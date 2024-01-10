import { useState } from 'react';
import { Nav } from "react-bootstrap";
import PushMusical from './pushMusical';
import PushConcert from './pushConcert';
import PushExhibition from './pushExhibition';
import PushClassic from './pushClassic';
import "./selectUi.css";

function UiSelect() {
  let [selcet, setSelect] = useState(0); {/* 선택된 셀렉트를 나타내는 state */}
  return (
    <div>
      <Nav style={{paddingLeft: '2vw'}}variant="tabs" defaultActiveKey="link0"> {/* 셀렉트UI의 버튼 NAV */}
        <Nav.Item>
          <Nav.Link className="selcetNav" eventKey="link0" onClick={()=>{
            setSelect(0)
          }}>추천 콘서트</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="selcetNav" eventKey="link1" onClick={()=>{
            setSelect(1)
          }}>추천 뮤지컬</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="selcetNav" eventKey="link2" onClick={()=>{
            setSelect(2)
          }}>추천 클래식</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="selcetNav" eventKey="link3" onClick={()=>{
            setSelect(3)
          }}>추천 전시회</Nav.Link>
        </Nav.Item>
      </Nav>
      <Uicontent selcet={selcet}></Uicontent> {/* 선택된 select에 따라 그에 맞는 컴포넌트를 보여주는 영역 */}
    </div>
  );
}

function Uicontent(props) {
  return [<PushConcert/>,<PushMusical/>,<PushClassic/>,<PushExhibition/>][props.selcet] // 선택된 셀렉트에 대한 정보를 보여주는 컴포넌트
}
export default UiSelect;
