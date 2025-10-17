// 练习17：声明函数checkSameType，检查数组所有元素是否为相同数据类型
function checkSameType(arr) {
  if (!Array.isArray(arr)) {
    return "请传入数组类型的参数";
  }
  if (arr.length === 0) {
    return "空数组，无元素类型可比较";
  }
  const firstType = typeof arr[0];
  const allSameType = arr.every(item => typeof item === firstType);
  return allSameType ? `数组所有元素均为 ${firstType} 类型` : `数组中存在多种数据类型（第一个元素为 ${firstType} 类型）`;
}

// 调用示例
console.log(checkSameType([1, 2, 3]));
console.log(checkSameType([1, "2", true]));