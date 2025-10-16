// 练习3：使用for循环从0迭代到n（n可自定义）
function iterateToN(n) {
  console.log("=== 从0迭代到" + n + " ===");
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
}

// 示例调用：迭代0到5
iterateToN(5);
// 如需迭代到其他数字，修改括号内参数即可，如 iterateToN(15);