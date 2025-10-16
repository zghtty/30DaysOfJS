// 练习3：生成随机RGB颜色（格式：rgb(r,g,b)，r/g/b范围0~255）
function getRandomRgb() {
  // 生成0~255的随机整数（RGB每个通道范围）
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  
  return "rgb(" + red + "," + green + "," + blue + ")";
}

console.log("=== 随机RGB颜色 ===");
console.log(getRandomRgb()); // 示例：rgb(240,180,80)