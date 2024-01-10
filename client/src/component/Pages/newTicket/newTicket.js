import axios from "axios";
import "./newTicket.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload } from "antd";
import { API_URL } from "../../config/contansts";

function NewTicket() {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(null);

  const AddContents = async (e) => {
    e.preventDefault();

    const imageURL = imageUrl;
    const title = e.target.contentTitle.value; // asd
    const kind = e.target.contnetKind.value; // 2
    const date = e.target.contentDate.value;
    const address = e.target.contentAddress.value;
    const price = e.target.contentPrice.value;
    const help = e.target.contentHelp.value;
    const people = e.target.contentMax.value;
    //db 순서 = 제목 종류 가격 설명 사진 위치 일정 최대인원
    // console.log(imageURL,title,find,date,address,price,help,people);

    console.log("test", imageURL);

    await axios
      .post(`${API_URL}/newTicket`, {
        title:title,
        kind:kind,
        price,
        help,
        imageURL,
        address,
        date,
        people,
      })
      .then(() => {
        console.log("성공");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onChangeImage = (info) => {
    // 파일이 업로드 중일 때
    console.log("new", info.file);
    if (info.file.status === "uploading") {
      console.log("업로드중");
      return;
    }
    // 파일이 업로드 완료 되었을 때
    if (info.file.status === "done") {
      console.log("성공");
      const response = info.file.response;
      const imageUrl = response.imageUrl;
      // 받은 이미지경로를 imageUrl에 넣어줌
      setImageUrl(imageUrl);
    }
  };

  return (
    <div className="newTicketPage container">
      <div className="mainTitle">티켓등록</div>
      <form onSubmit={AddContents}>
        <div className="newTicketinfo">
          <label>프로그램 명</label>
          <input type="text" name="newImage" id="contentTitle"></input>
        </div>
        <div className="newTicketFlexBox">
          <div className='newTicketFlex1'>
            <div className="newTicketinfo" style={{margin: 0}}>
              <label>분류</label>
              <select id="contnetKind">
                <option value={1}>콘서트</option>
                <option value={2}>뮤지컬</option>
                <option value={3}>클래식</option>
                <option value={4}>전시회</option>
              </select>
            </div>
            <div className="newTicketinfo">
              <label>상영 일정</label>
              <input type="date" name="newImage" id="contentDate"></input>
            </div>
          </div>
          <div className='newTicketFlex2'>
            <div className="newTicketinfo" style={{margin: 0}}>
              <Upload
                name="image"
                action={`${API_URL}/image`}
                listType="picture"
                showUploadList={false}
                onChange={onChangeImage}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="" width="200px" height="200px" />
                ) : (
                  <div id="upload-img-placeholder">
                    <i class="fa-regular fa-file-image"></i><br/>
                    <span>포스터를 등록 해주세요.</span>
                  </div>
                )}
              </Upload>
            </div>
          </div>
        </div>

        <div className="newTicketinfo">
          <label>위치</label>
          <input type="text" name="newImage" id="contentAddress"></input>
        </div>
        <div className="newTicketinfo">
          <label>가격</label>
          <input type="number" name="newImage" id="contentPrice"></input>
        </div>
        <div className="newTicketinfo">
          <label>프로그램 설명</label>
          <input type="text" name="newImage" id="contentHelp"></input>
        </div>
        <div className="newTicketinfo">
          <label>최대 이용가능 인원</label>
          <input type="number" name="newImage" id="contentMax"></input>
        </div>
        <div className="newticketEditBtn">
          <button type="submit">등록하기</button>
        </div>
      </form>
    </div>
  );
}

export default NewTicket;
