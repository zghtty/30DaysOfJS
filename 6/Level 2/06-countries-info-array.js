// 练习6：创建国家信息数组（格式：[国家名, 3位缩写, 名称长度]）
const countries = [
  "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",
  "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"
];

// 处理每个国家，生成信息数组
const countryInfoArray = countries.map(function(country) {
  return [
    country,                  // 国家名
    country.slice(0, 3).toUpperCase(), // 3位大写缩写
    country.length            // 名称长度
  ];
});

console.log("=== 国家信息数组 ===");
console.log(countryInfoArray);
// 预期输出：[["Albania", "ALB", 7], ["Bolivia", "BOL", 7], ...]