// 练习9：声明函数factorial，接收非负整数n，返回n的阶乘
function factorial(n) {
  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
    return "请输入非负整数";
  }
  return n === 0 ? 1 : n * factorial(n - 1);
}

// 调用示例
console.log(factorial(5));
console.log(factorial(0));