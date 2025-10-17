// 练习17：声明函数randomHexaNumberGenerator，生成随机十六进制颜色
function randomHexaNumberGenerator() {
  const chars = "0123456789abcdef";
  let hexa = "#";
  for (let i = 0; i < 6; i++) {
    hexa += chars[Math.floor(Math.random() * 16)];
  }
  return hexa;
}

// 调用函数
const randomHex = randomHexaNumberGenerator();
console.log("随机十六进制颜色：", randomHex);