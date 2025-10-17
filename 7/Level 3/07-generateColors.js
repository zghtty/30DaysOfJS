// 练习7：声明函数generateColors，生成任意数量的十六进制或RGB颜色
function generateColors(type, count = 1) {
  if (!["hexa", "rgb"].includes(type)) {
    return "颜色类型必须为'hexa'或'rgb'";
  }
  if (typeof count !== "number" || count < 1 || !Number.isInteger(count)) {
    return "请输入正整数作为颜色数量";
  }
  const colors = [];
  if (type === "hexa") {
    const chars = "0123456789abcdef";
    for (let i = 0; i < count; i++) {
      let hexa = "#";
      for (let j = 0; j < 6; j++) {
        hexa += chars[Math.floor(Math.random() * 16)];
      }
      colors.push(hexa);
    }
  } else {
    const getRandomValue = () => Math.floor(Math.random() * 256);
    for (let i = 0; i < count; i++) {
      colors.push(`rgb(${getRandomValue()},${getRandomValue()},${getRandomValue()})`);
    }
  }
  return count === 1 ? colors[0] : colors;
}

// 调用示例
console.log(generateColors("hexa", 3));
console.log(generateColors("rgb", 1));