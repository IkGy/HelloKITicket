import "./create.css";
import React, { useState } from 'react';

const Create = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [file, setFile] = useState(null);

  // 공지사항을 등록하는 함수 (여기서는 콘솔에 출력만 하고 있습니다)
  const handleSubmit = (event) => {
    event.preventDefault(); // 폼 제출에 의한 페이지 새로고침 방지
    console.log('공지사항 등록:', { title, content, file });
    // 실제 애플리케이션에서는 여기서 API를 호출하여 서버에 데이터를 저장할 것입니다.
  };

  return (
    <>
      <div className="notice-wrapper">
        <div className="notice-section">
          <div className="notice-title">
            공지사항 등록
          </div>
          <div className="notice-form"> {/* form 박스*/}
            <form onSubmit={handleSubmit}>
              <div className="title-box">
                <label htmlFor="title">제목</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="author-box">
                <label htmlFor="author">작성자</label>
                <input
                  type="text"
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                />
              </div>
              <div className="content-box">
                <label htmlFor="content">내용</label>
                <textarea
                  id="content"
                  style={{ resize: 'none' }}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </div>
              <div className="file-box">
                <label htmlFor="file">첨부파일</label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              <button type="submit">등록하기</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Create;
