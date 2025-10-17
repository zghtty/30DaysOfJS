// 练习3：声明函数arrayOfHexaColors，返回包含任意数量十六进制颜色的数组
function arrayOfHexaColors(count = 1) {
  if (typeof count !== "number" || count < 1 || !Number.isInteger(count)) {
    return "请输入正整数作为颜色数量";
  }
  const chars = "0123456789abcdef";
  const hexaColors = [];
  for (let i = 0; i < count; i++) {
    let hexa = "#";
    for (let j = 0; j < 6; j++) {
      hexa += chars[Math.floor(Math.random() * 16)];
    }
    hexaColors.push(hexa);
  }
  return hexaColors;
}

// 调用示例
console.log(arrayOfHexaColors(3));
console.log(arrayOfHexaColors(1));