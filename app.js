// 사용할 라이브러리를 가져옴
const express = require("express")
const app = express();
const path = require("path")

console.log(__dirname)
/*
 1.__dirname 경로를 찾음 
 2. path.join은 다른 운영체제마다 경로가 다른경우를 방지
*/
app.use(express.static(path.join(__dirname, "public")))

// 접속할 포트번호 지정
const PORT = process.env.RORT || 5000;

// 서버 실행
app.listen(PORT, () => console.log(`server is running ${PORT}`))