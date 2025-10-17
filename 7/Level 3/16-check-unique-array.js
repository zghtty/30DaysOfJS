// 练习16：声明函数checkUniqueArray，检查数组所有元素是否唯一
function checkUniqueArray(arr) {
  if (!Array.isArray(arr)) {
    return "请传入数组类型的参数";
  }
  const uniqueSet = new Set(arr);
  return uniqueSet.size === arr.length ? "数组所有元素均唯一" : "数组中存在重复元素";
}

// 调用示例
console.log(checkUniqueArray([1, 2, 3, 4]));
console.log(checkUniqueArray([1, 2, 2, 3]));