// 练习7：计算圆面积（面积 = π × r × r，π取Math.PI）
function areaOfCircle(radius) {
  if (radius <= 0) {
    return "半径必须为正数";
  }
  return Math.PI * radius * radius;
}

// 调用函数（示例：半径4）
const circleArea = areaOfCircle(4);
console.log("圆面积：", circleArea.toFixed(2));