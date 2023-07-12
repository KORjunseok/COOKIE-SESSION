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

app.listen(5002, () => {
  console.log(5002, "포트를 실행했습니다.");
});
