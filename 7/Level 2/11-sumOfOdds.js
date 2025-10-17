// 练习11：声明函数sumOfOdds，接收数字n，返回0到n的所有奇数之和
function sumOfOdds(n) {
  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
    return "请输入非负整数";
  }
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 !== 0) sum += i;
  }
  return sum;
}

// 调用示例（计算0到10的奇数之和）
const oddSum = sumOfOdds(10);
console.log("0到10的奇数之和：", oddSum);