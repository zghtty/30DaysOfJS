// 练习19：声明函数sevenRandomNumbers，返回包含7个0-9唯一随机数的数组
function sevenRandomNumbers() {
  const randomArr = [];
  while (randomArr.length < 7) {
    const randomNum = Math.floor(Math.random() * 10);
    if (!randomArr.includes(randomNum)) {
      randomArr.push(randomNum);
    }
  }
  return randomArr;
}

// 调用函数
const sevenRandoms = sevenRandomNumbers();
console.log("7个0-9的唯一随机数：", sevenRandoms);