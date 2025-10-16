// 练习9：查找名称字符数最多的国家
const countries = [
  "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",
  "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"
];

let longestCountry = ""; // 存储最长名称的国家

// 遍历数组，比较名称长度
for (let i = 0; i < countries.length; i++) {
  const country = countries[i];
  if (country.length > longestCountry.length) {
    longestCountry = country;
  }
}

console.log("=== 名称最长的国家 ===");
console.log(longestCountry); // 预期：Ethiopia（8个字符）