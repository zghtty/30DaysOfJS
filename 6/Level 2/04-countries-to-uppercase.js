// 练习4：将countries数组转换为全大写数组
// 原始数组
const countries = [
  "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",
  "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"
];

// 使用map方法转换为全大写
const upperCountries = countries.map(function(country) {
  return country.toUpperCase();
});

console.log("=== 全大写国家数组 ===");
console.log(upperCountries);
// 预期输出：["ALBANIA", "BOLIVIA", "CANADA", ..., "KENYA"]