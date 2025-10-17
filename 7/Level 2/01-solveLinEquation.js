// 练习1：计算线性方程 ax + by + c = 0 的值（返回等式结果，理想值为0）
function solveLinEquation(a, b, x, y, c) {
  return a * x + b * y + c;
}

// 调用函数（示例：a=2, b=3, x=1, y=2, c=-8 → 2*1 + 3*2 -8 = 0）
const linResult = solveLinEquation(2, 3, 1, 2, -8);
console.log("线性方程结果（理想值0）：", linResult);