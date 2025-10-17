// 练习10：声明函数sumOfNumbers，接收数字n，返回0到n的所有数字之和
function sumOfNumbers(n) {
  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
    return "请输入非负整数";
  }
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// 调用示例（计算0到10的和）
const totalSum = sumOfNumbers(10);
console.log("0到10的数字之和：", totalSum);