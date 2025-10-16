// 练习8：反转国家数组并将每个国家名称大写
const countries = [
  "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",
  "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"
];

// 步骤：1.复制数组 2.反转 3.每个元素大写
const reversedUpperCountries = [...countries]
  .reverse()
  .map(function(country) {
    return country.toUpperCase();
  });

console.log("=== 原始countries数组 ===");
console.log(countries);
console.log("\n=== 反转并大写后的国家数组 ===");
console.log(reversedUpperCountries);
// 预期输出：["KENYA", "JAPAN", "IRELAND", ..., "ALBANIA"]