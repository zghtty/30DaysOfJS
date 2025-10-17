// 练习13：声明函数average，接收数组，返回元素平均值，检查元素是否均为数字
function average(arr) {
  if (!Array.isArray(arr)) {
    return "请传入数组类型的参数";
  }
  if (arr.length === 0) {
    return "空数组无法计算平均值";
  }
  const allNumbers = arr.every(item => typeof item === "number");
  if (!allNumbers) {
    return "数组中存在非数字元素，无法计算平均值";
  }
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  const avg = (sum / arr.length).toFixed(2);
  return `数组平均值：${avg}`;
}

// 调用示例
console.log(average([1, 2, 3, 4, 5]));
console.log(average([10, 20, 30]));