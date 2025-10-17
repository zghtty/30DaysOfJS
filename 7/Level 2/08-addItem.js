// 练习8：声明函数addItem，接收item参数，返回添加item后的数组
function addItem(item) {
  const initialArray = [];
  initialArray.push(item);
  return initialArray;
}

// 调用示例（添加"book"到数组）
const newArray = addItem("book");
console.log("添加item后的数组：", newArray);