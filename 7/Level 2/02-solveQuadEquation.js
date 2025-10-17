// 练习2：解二次方程 ax² + bx + c = 0（返回根的集合）
function solveQuadEquation(a = 0, b = 0, c = 0) {
  if (a === 0) {
    if (b === 0) {
      return c === 0 ? "方程有无数解" : "方程无解";
    }
    const x = -c / b;
    return { [x]: x };
  }

  const delta = b * b - 4 * a * c;
  if (delta < 0) {
    return "方程无实数根";
  } else if (delta === 0) {
    const x = -b / (2 * a);
    return { [x]: x };
  } else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return { [x1]: x1, [x2]: x2 };
  }
}

// 调用示例
console.log(solveQuadEquation());
console.log(solveQuadEquation(1, 4, 4));
console.log(solveQuadEquation(1, -1, -2));