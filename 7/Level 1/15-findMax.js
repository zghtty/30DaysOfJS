// 练习15：接收三个参数，不使用Math.max，返回最大值
function findMax(num1, num2, num3) {
  let max = num1;
  if (num2 > max) max = num2;
  if (num3 > max) max = num3;
  return max;
}

// 调用示例
console.log("最大值（0,10,5）：", findMax(0, 10, 5));
console.log("最大值（0,-10,-2）：", findMax(0, -10, -2));