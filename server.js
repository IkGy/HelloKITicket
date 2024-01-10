const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const fs = require('fs')


const index = path.join(__dirname, 'client/build/index.html')
//client부분에서 build를 한 파일을 가져오는 부분
const port = process.env.NODE_ENV || '8000';

// const userRouter = require('./routes/User');
const eventRouter = require('./routes/Event');
const loginRouter = require('./routes/Login');
const ticketRouter = require('./routes/Ticket');

const { sequelize } = require('./models')


app.set('view engine', 'html');

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));  

app.use(express.static(path.join(__dirname, 'client/build')));

const makeFolder = (dir)=>{
  if (!fs.existsSync(dir)) {//upload 폴더가 있는지 감지하는 부분
    fs.mkdirSync(dir)
  }
}//현제 폴더에 "upload"폴더가 없는 경우 폴더를 생성해주는 코드
makeFolder("upload")

const multer = require('multer');
//이미지를 저장하고 불러오기 위한 코드
const upload = multer({ 
    storage: multer.diskStorage({ //저장 설정
        destination: function(req, file, cb) { // 어디에 저장할거냐? upload/
            cb(null, 'upload/') // upload폴더 밑에
        },
        filename: function(req, file, cb){ // 어떤 이름으로 저장할거야?
            cb(null, file.originalname) // 업로드한 file의 오리지널 이름으로 저장하겠다.
        }
    })
})


// '/upload'경로로 뭔가 요청이오면 여기서 걸리고 upload폴더의 정적 파일을 제공하겠다
// 예: "/upload/image.jpg")에 액세스하면 Express.js는 "upload" 디렉터리에서 정적 파일을 찾아 제공
app.use("/upload", express.static("upload"));


// json형식의 데이터를 처리할 수 있게 설정
app.use(express.json());

var cors = require('cors');
// 브라우저 cors 이슈를 막기 위해 사용(모든 브라우저의 요청을 일정하게 받겠다)
app.use(cors());


app.post('/image', upload.single('image'), (req, res)=>{ 
  const file = req.file; 
  console.log("post(/image) file:",file);
  res.send({ 
      imageUrl: "http://localhost:8000/"+file.destination+file.filename //이미지 여기 저장했다 json형식으로 보냄
  })
})

// app.use('/user', userRouter);
app.use('/event', eventRouter);
app.use('/login', loginRouter);
app.use('/newTicket', ticketRouter);


app.get('/', (req,res) => {
  res.sendFile(index)
});

sequelize.sync({ force: false })
  .then(() => {
    console.log("DB연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.get('*',(req,res,next)=>{
  res.sendFile(index)
})

app.listen(port, function () {
  console.log(`${port}에서 대기중`)
}); 