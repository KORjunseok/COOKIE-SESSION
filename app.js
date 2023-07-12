const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());

app.get("/set-cookie", (req, res) => {
  let expires = new Date();
  expires.setMinutes(expires.getMinutes() + 60); // 만료 시간을 60분으로 설정합니다.

  res.cookie("name", "sparta", {
    expires: expires,
  });
  return res.status(200).end();
});

app.get("/get-cookie", (req, res) => {
  // const cookie = req.headers.cookie;
  const cookies = req.cookies; // cookieparser 미들웨어를 적용했기 때문에 사용할 수 있다.
  console.log(cookies); // name=sparta
  return res.status(200).json({ cookies });
});

// 사용자 정보를 저장할 자물쇠(데이터를 저장하는 부분) 세션 파트
let session = {}; // key - value
app.get("/set-session", function (req, res, next) {
  const name = "sparta"; // 세션에 저장 데이터
  const uniqueInt = Date.now(); // 클라이언트에게 할당할 열쇠
  session[uniqueInt] = { name }; // 세션에 데이터 저장

  res.cookie("sessionKey", uniqueInt);
  return res.status(200).end();
});

app.get("/get-session", (req, res) => {
  const { sessionKey } = req.cookies;
  const sessionItem = session[sessionKey];

  console.log(sessionItem);
  return res.status(200).json({ sessionItem });
});

// app.get("/get-session", function (req, res, next) {
//   const { sessionKey } = req.cookies;
//   const name = session[sessionKey];
//   return res.status(200).json({ name });
// });

app.listen(5002, () => {
  console.log(5002, "포트를 실행했습니다.");
});
