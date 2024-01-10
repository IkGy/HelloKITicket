import { useState } from "react";
import { Link } from "react-router-dom";
import "./event.css";

function Event() {
  const itemsPerPage = 5; // 한 페이지당 표시할 공지사항 수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const post = [
    {
      id: 1,
      title: "제목1",
      content: "내용1",
      date: "날짜1",
    },
    {
      id: 2,
      title: "제목2",
      content: "내용2",
      date: "날짜2",
    },
    {
      id: 3,
      title: "제목3",
      content: "내용3",
      date: "날짜3",
    },
    {
      id: 4,
      title: "제목4",
      content: "내용3",
      date: "날짜3",
    },
    {
      id: 5,
      title: "제목5",
      content: "내용3",
      date: "날짜3",
    },
    {
      id: 8,
      title: "제목8",
      content: "내용3",
      date: "날짜3",
    },
    {
      id: 6,
      title: "제목6",
      content: "내용3",
      date: "날짜3",
    },
    {
      id: 7,
      title: "제목7",
      content: "내용3",
      date: "날짜3",
    },
  ]; {/* 공지사항의 정보가 담긴 state */}

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = post.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(post.length / itemsPerPage);
  const maxVisiblePages = 5; // 보이는 페이지 숫자의 최대 개수
  let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
  let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(endPage - maxVisiblePages + 1, 1);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="eventPageBg">
      <div className="eventPage container">
        <div className="mainTitle">
          <i class="fa-solid fa-bullhorn"></i> 공지사항
          <span style={{ fontSize: "2.5vw" }}>({post.length})</span>
        </div>
        <div className="postListBox">
          {currentItems.map((a, i) => {
            return (
              <Link
                to={`/event/${a.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="postList" key={a.id}>
                  <div className="postIntro">
                    <div className="postTitle">{a.title}</div>
                    <div className="postDate">
                      {a.date}, <i class="fa-solid fa-eye"></i> 조회수
                    </div>
                  </div>
                  <div className="postImg">대표이미지</div>
                </div>
              </Link>
            );
          })}
        </div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={post.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          totalPages={totalPages}
          pageNumbers={pageNumbers}
        /> {/* 공지사항안에서 다음 페이지로 이동시켜주는 컴포넌트 영역 */}
      </div>
    </div>
  );
}

function Pagination({
  itemsPerPage,
  totalItems,
  currentPage,
  onPageChange,
  totalPages,
  pageNumbers,
}) {
  return (
    <div className="pagination"> {/* 현재 페이지의 위치를 알려주는 컴포넌트 */}
      {currentPage > 1 && (
        <span onClick={() => onPageChange(currentPage - 1)}>&laquo;</span>
      )}
      {pageNumbers.map((number) => (
        <span
          key={number}
          onClick={() => onPageChange(number)}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </span>
      ))}
      {currentPage < totalPages && (
        <span onClick={() => onPageChange(currentPage + 1)}>&raquo;</span>
      )}
    </div>
  );
}

export default Event;
