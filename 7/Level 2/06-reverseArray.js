// 练习6：声明函数reverseArray，接收数组，不使用reverse方法，返回反转数组
function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return "请传入数组类型的参数";
  }
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

// 调用示例
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(["A", "B", "C"]));