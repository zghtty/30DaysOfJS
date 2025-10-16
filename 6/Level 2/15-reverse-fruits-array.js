// 练习15：反转水果数组（不使用reverse方法）
const fruits = ["banana", "orange", "mango", "lemon"];
const reversedFruits = []; // 存储反转后的数组

// 从原数组最后一个元素遍历到第一个
for (let i = fruits.length - 1; i >= 0; i--) {
  reversedFruits.push(fruits[i]);
}

console.log("=== 原始水果数组 ===");
console.log(fruits);
console.log("\n=== 反转后的水果数组 ===");
console.log(reversedFruits); // 预期：["lemon", "mango", "orange", "banana"]