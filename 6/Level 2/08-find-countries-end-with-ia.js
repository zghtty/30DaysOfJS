// 练习8：查找以"ia"结尾的国家，无则提示
const countries = [
  "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",
  "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"
];

// 筛选以"ia"结尾的国家
const iaCountries = countries.filter(function(country) {
  return country.endsWith("ia");
});

// 判断结果并输出
if (iaCountries.length > 0) {
  console.log("=== 以'ia'结尾的国家 ===");
  console.log(iaCountries); // 预期：["Albania", "Bolivia","Ethiopia"]
} else {
  console.log("These are countries ends without ia");
}