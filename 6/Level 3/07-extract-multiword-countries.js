// 练习7：提取包含两个或更多单词的国家
const countries = [
  "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",
  "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"
];

// 筛选包含空格的国家（多单词名称含空格）
const multiWordCountries = countries.filter(function(country) {
  return country.includes(" ");
});

console.log("=== 包含两个或更多单词的国家 ===");
console.log(multiWordCountries); // 预期：空数组（原始数组均为单单词国家）
// 若需测试，可手动添加多单词国家，如 countries.push("United States"); 则会被筛选出