// 练习2：声明函数rgbColorGenerator，生成随机RGB颜色
function rgbColorGenerator() {
  const getRandomValue = () => Math.floor(Math.random() * 256);
  const r = getRandomValue();
  const g = getRandomValue();
  const b = getRandomValue();
  return `rgb(${r},${g},${b})`;
}

// 调用函数
const randomRgb = rgbColorGenerator();
console.log("随机RGB颜色：", randomRgb);