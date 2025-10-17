// 练习6：计算长方体体积（体积 = 长 × 宽 × 高）
function volumeOfRectPrism(length, width, height) {
  if (length <= 0 || width <= 0 || height <= 0) {
    return "长、宽、高必须为正数";
  }
  return length * width * height;
}

// 调用函数（示例：长5，宽3，高2）
const volume = volumeOfRectPrism(5, 3, 2);
console.log("长方体体积：", volume);