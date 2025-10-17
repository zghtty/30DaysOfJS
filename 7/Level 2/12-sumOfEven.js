// 练习12：声明函数sumOfEven，接收数字n，返回0到n的所有偶数之和
function sumOfEven(n) {
  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
    return "请输入非负整数";
  }
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) sum += i;
  }
  return sum;
}

// 调用示例（计算0到10的偶数之和）
const evenSum = sumOfEven(10);
console.log("0到10的偶数之和：", evenSum);