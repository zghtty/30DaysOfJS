// 练习4：提取包含"land"的国家并打印
const countries = [
  "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",
  "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"
];

// 筛选包含"land"的国家
const landCountries = countries.filter(function(country) {
  return country.includes("land");
});

console.log("=== 包含'land'的国家 ===");
console.log(landCountries); // 预期：["Finland","Ireland"]