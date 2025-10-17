// 练习14：声明函数modifyArray，接收数组，修改第五个元素为大写，长度<5返回"Not Found"
function modifyArray(arr) {
  if (!Array.isArray(arr)) {
    return "请传入数组类型的参数";
  }
  if (arr.length < 5) {
    return "Not Found";
  }
  const modifiedArr = [...arr];
  modifiedArr[4] = typeof modifiedArr[4] === "string" ? modifiedArr[4].toUpperCase() : modifiedArr[4];
  return modifiedArr;
}

// 调用示例
console.log(modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"]));
console.log(modifyArray(["Google", "Facebook", "Apple", "Amazon"]));