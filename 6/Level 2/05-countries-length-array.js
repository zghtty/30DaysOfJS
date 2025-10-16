// 练习5：创建countries数组中每个国家名称长度的数组
const countries = [
  "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",
  "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"
];

// 使用map方法获取每个国家的长度
const countryLengths = countries.map(function(country) {
  return country.length;
});

console.log("=== 国家名称长度数组 ===");
console.log(countryLengths);
// 预期输出：[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]