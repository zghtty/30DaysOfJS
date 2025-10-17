// 练习4：声明函数arrayOfRgbColors，返回包含任意数量RGB颜色的数组
function arrayOfRgbColors(count = 1) {
  if (typeof count !== "number" || count < 1 || !Number.isInteger(count)) {
    return "请输入正整数作为颜色数量";
  }
  const getRandomValue = () => Math.floor(Math.random() * 256);
  const rgbColors = [];
  for (let i = 0; i < count; i++) {
    rgbColors.push(`rgb(${getRandomValue()},${getRandomValue()},${getRandomValue()})`);
  }
  return rgbColors;
}

// 调用示例
console.log(arrayOfRgbColors(3));
console.log(arrayOfRgbColors(1));