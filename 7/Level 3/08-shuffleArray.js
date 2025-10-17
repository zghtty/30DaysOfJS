// 练习8：声明函数shuffleArray，接收数组，返回打乱顺序的数组（Fisher-Yates算法）
function shuffleArray(arr) {
  if (!Array.isArray(arr)) {
    return "请传入数组类型的参数";
  }
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[randomIndex]] = [newArr[randomIndex], newArr[i]];
  }
  return newArr;
}

// 调用示例
const originalArr = [1, 2, 3, 4, 5];
const shuffledArr = shuffleArray(originalArr);
console.log("原数组：", originalArr);
console.log("打乱后数组：", shuffledArr);