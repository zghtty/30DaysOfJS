// 练习8：计算圆周长（周长 = 2 × π × r）
function circumOfCircle(radius) {
  if (radius <= 0) {
    return "半径必须为正数";
  }
  return 2 * Math.PI * radius;
}

// 调用函数（示例：半径4）
const circumference = circumOfCircle(4);
console.log("圆周长：", circumference.toFixed(2));