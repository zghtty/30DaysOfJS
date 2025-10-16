// 练习2：生成随机十六进制颜色（格式：#xxxxxx）
// 十六进制字符集（0-9, a-f）
const hexCharSet = "0123456789abcdef";
let hexColor = "#"; // 十六进制颜色以#开头

// 循环6次，生成6个十六进制字符
for (let i = 0; i < 6; i++) {
  const randomIndex = Math.floor(Math.random() * hexCharSet.length);
  hexColor += hexCharSet[randomIndex];
}

console.log("=== 随机十六进制颜色 ===");
console.log(hexColor); // 示例：#ee33df