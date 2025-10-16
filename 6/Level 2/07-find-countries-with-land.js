// 练习7：查找包含"land"的国家，无则提示
const countries = [
  "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",
  "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"
];

// 筛选包含"land"的国家（不区分大小写，此处原文为小写land）
const landCountries = countries.filter(function(country) {
  return country.includes("land");
});

// 判断结果并输出
if (landCountries.length > 0) {
  console.log("=== 包含'land'的国家 ===");
  console.log(landCountries); // 预期：["Finland","Ireland"]
} else {
  console.log("所有这些国家都不含land");
}