// 练习5：声明函数swapValues，交换x和y的值（返回交换后的对象）
function swapValues(x, y) {
  [x, y] = [y, x]; // 解构赋值交换
  return { x, y };
}

// 调用函数（示例：3和4交换）
const swapped = swapValues(3, 4);
console.log("交换后：x =", swapped.x, "，y =", swapped.y);