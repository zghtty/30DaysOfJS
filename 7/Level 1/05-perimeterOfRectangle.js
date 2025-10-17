// 练习5：计算长方形周长（周长 = 2 × (长 + 宽)）
function perimeterOfRectangle(length, width) {
  if (length <= 0 || width <= 0) {
    return "长和宽必须为正数";
  }
  return 2 * (length + width);
}

// 调用函数（示例：长5，宽3）
const perimeter = perimeterOfRectangle(5, 3);
console.log("长方形周长：", perimeter);