// 练习12：声明函数sumOfArrayItems，接收数组，返回所有元素总和，检查元素是否均为数字
function sumOfArrayItems(arr) {
  if (!Array.isArray(arr)) {
    return "请传入数组类型的参数";
  }
  const allNumbers = arr.every(item => typeof item === "number");
  if (!allNumbers) {
    return "数组中存在非数字元素，无法计算总和";
  }
  return arr.reduce((acc, cur) => acc + cur, 0);
}

// 调用示例
console.log(sumOfArrayItems([1, 2, 3, 4]));
console.log(sumOfArrayItems([1, "2", 3]));