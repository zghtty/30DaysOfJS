// 练习1：复制countries数组（避免修改原始数组）
const countries = [
  "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",
  "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"
];

// 方法1：使用扩展运算符（推荐，简洁）
const countriesCopy1 = [...countries];
// 方法2：使用slice方法（无参数时复制整个数组）
const countriesCopy2 = countries.slice();

// 验证：修改副本不会影响原始数组
countriesCopy1.push("France");
console.log("=== 原始countries数组 ===");
console.log(countries); // 无France
console.log("\n=== 扩展运算符复制的副本（含France） ===");
console.log(countriesCopy1);
console.log("\n=== slice复制的副本（无France） ===");
console.log(countriesCopy2);