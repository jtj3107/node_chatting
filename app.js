// 사용할 라이브러리를 가져옴
const express = require("express")
const http = require("http")
const app = express();
const path = require("path")
// server라는 변수에 http를 통해 동작한 app을 실행시키는 로직
const server = http.createServer(app)
const socketIO = require("socket.io")

const io = socketIO(server);

/*
 1.__dirname 경로를 찾음 
 2. path.join은 다른 운영체제마다 경로가 다른경우를 방지
*/
app.use(express.static(path.join(__dirname, "src")))

// 접속할 포트번호 지정
const PORT = process.env.RORT || 5000;

// 소켓 연결
io.on("connection", (socket) => {
    socket.on("chatting", (data) => {
        io.emit("chatting", data)
    })
})

// 서버 실행
server.listen(PORT, () => console.log(`server is running ${PORT}`))