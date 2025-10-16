// 练习16：打印fullStack数组的所有元素（转为大写）
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"]
];

console.log("=== fullStack数组元素（大写） ===");
// 双层for循环：先遍历外层数组，再遍历内层数组
for (let i = 0; i < fullStack.length; i++) {
  const stackLayer = fullStack[i];
  for (let j = 0; j < stackLayer.length; j++) {
    console.log(stackLayer[j].toUpperCase());
  }
}

// 预期输出：
// HTML
// CSS
// JS
// REACT
// NODE
// EXPRESS
// MONGODB