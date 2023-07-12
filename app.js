const jwt = require("jsonwebtoken");

const payloadData = {
  myPayloadData: 1234,
};

// jwt 생성
const token = jwt.sign(payloadData, "mysecretKey");
console.log(token);

// jwt의 payload 데이터를 복호화
const decodedValue = jwt.decode(token);
console.log("복호화한 token 입니다.", decodedValue);

// jwt를 만들었을 때, 사용한 비밀키가 일치하는지 검증
const decodedValueByVerify = jwt.verify(token, "mysecretKey");
console.log("decodedValueByVerify : ", decodedValueByVerify);

// jwt를 만들었을 때, 사용한 비밀키가 일치하는지 검증 하지만 에러 발생
const decodedValueByVerifyToError = jwt.verify(token, "비밀번호 몰루.");
console.log("decodedValueByVerifyToError : ", decodedValueByVerifyToError);
