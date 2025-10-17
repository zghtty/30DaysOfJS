// 练习11：声明函数sum，接收任意数量的参数，返回总和
function sum(...args) {
  return args.filter(item => typeof item === "number").reduce((acc, cur) => acc + cur, 0);
}

// 调用示例
console.log(sum(1, 2, 3, 4));
console.log(sum(1, "a", 5));