// 练习4：计算矩形面积（面积 = 长 × 宽）
function areaOfRectangle(length, width) {
  if (length <= 0 || width <= 0) {
    return "长和宽必须为正数";
  }
  return length * width;
}

// 调用函数（示例：长5，宽3）
const area = areaOfRectangle(5, 3);
console.log("矩形面积：", area);