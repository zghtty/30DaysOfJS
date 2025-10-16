// 练习6：提取名称长度为4的国家
const countries = [
  "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",
  "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"
];

// 筛选长度为4的国家
const fourCharCountries = countries.filter(function(country) {
  return country.length === 4;
});

console.log("=== 名称长度为4的国家 ===");
console.log(fourCharCountries); // 预期：空数组（原始数组中无4字符国家）