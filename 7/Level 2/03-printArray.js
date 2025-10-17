// 练习3：声明函数printArray，接收数组参数，打印每个值
function printArray(arr) {
  if (!Array.isArray(arr)) {
    console.log("请传入数组类型的参数");
    return;
  }
  arr.forEach((item, index) => {
    console.log(`数组第${index + 1}个元素：${item}`);
  });
}

// 调用函数（示例数组）
printArray(["HTML", "CSS", "JavaScript"]);