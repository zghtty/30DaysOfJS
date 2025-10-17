// 练习9：声明函数removeItem，接收索引参数，返回删除该索引元素后的数组
function removeItem(index) {
  const initialArray = ["apple", "banana", "cherry", "date"];
  if (index < 0 || index >= initialArray.length) {
    return "索引超出数组范围";
  }
  initialArray.splice(index, 1);
  return initialArray;
}

// 调用示例（删除索引1的元素"banana"）
const removedArray = removeItem(1);
console.log("删除元素后的数组：", removedArray);