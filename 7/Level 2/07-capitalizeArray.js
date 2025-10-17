// 练习7：声明函数capitalizeArray，接收数组，返回所有元素大写的数组（假设元素为字符串）
function capitalizeArray(arr) {
  if (!Array.isArray(arr)) {
    return "请传入数组类型的参数";
  }
  return arr.map(item => typeof item === "string" ? item.toUpperCase() : item);
}

// 调用示例
console.log(capitalizeArray(["apple", "banana", "cherry"]));