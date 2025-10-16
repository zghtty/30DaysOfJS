// 练习10：查找名称长度为5的国家
const countries = [
  "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",
  "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"
];

// 筛选长度为5的国家
const fiveCharCountries = countries.filter(function(country) {
  return country.length === 5;
});

console.log("=== 名称长度为5的国家 ===");
console.log(fiveCharCountries); // 预期：["Japan", "Kenya"]