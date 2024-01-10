import { useParams } from 'react-router-dom';

function EventDetail(){
  let {id} = useParams(); 

  const post = [
    {
      id: 1,
      title: "제목1",
      content: "내용1",
      date: "날짜1",
    },
    {
      id: 8,
      title: "제목8",
      content: "내용8",
      date: "날짜3",
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
      content: "내용4",
      date: "날짜3",
    },
    {
      id: 5,
      title: "제목5",
      content: "내용5",
      date: "날짜3",
    },
    {
      id: 6,
      title: "제목6",
      content: "내용6",
      date: "날짜3",
    },
    {
      id: 7,
      title: "제목7",
      content: "내용7",
      date: "날짜3",
    },
    
  ];

  let index = post.find((a)=>{ return a.id == id })

  return (
    <div className='postDetailBoxBg'>
      <div className='postDetailBox container'>
        <div className='postDetailHeader'>
          <div className='postDetailTitle'>{index.title}</div>
          <div className='postDetailDate'>작성일 <i class="fa-solid fa-eye"></i></div>
        </div>
        <div className='postDetailBody'>
          <div>{index.content}</div>
        </div>
      </div>
    </div>
  )
}

export default EventDetail;