// 练习2：复制并排序countries数组（不修改原始数组）
const countries = [
  "Albania", "Canada", "Bolivia",  "Denmark", "Ethiopia",
  "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"
];

// 先复制数组，再排序（sort默认按字母顺序）
const sortedCountries = [...countries].sort();

console.log("=== 原始countries数组 ===");
console.log(countries);
console.log("\n=== 排序后的countries数组 ===");
console.log(sortedCountries);
// 预期排序结果：Albania, Bolivia, Canada, Denmark, Ethiopia, Finland, Germany, Hungary, Ireland, Japan, Kenya