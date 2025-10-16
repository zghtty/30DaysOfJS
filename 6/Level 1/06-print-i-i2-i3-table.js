// 练习6：打印i、i²、i³表格（对齐格式）
console.log("=== i、i²、i³表格 ===");
// 表头
console.log(" i    i^2   i^3");
// 循环0到10，计算并格式化输出
for (let i = 0; i <= 10; i++) {
  const i2 = i ** 2;
  const i3 = i ** 3;
  // 使用padStart补空格，确保格式对齐
  console.log(i.toString().padStart(2) + "    " + i2.toString().padStart(3) + "     " + i3.toString().padStart(3));
}