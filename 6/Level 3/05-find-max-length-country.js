// 练习5：查找名称字符数最多的国家（同Level2练习9，Level3重复考察）
const countries = [
  "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",
  "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"
];

let maxLength = 0;
let longestCountry = "";

// 遍历数组，记录最大长度和对应国家
for (let i = 0; i < countries.length; i++) {
  const country = countries[i];
  if (country.length > maxLength) {
    maxLength = country.length;
    longestCountry = country;
  }
}

console.log("=== 名称字符数最多的国家 ===");
console.log("国家：" + longestCountry + "，字符数：" + maxLength); // 预期：Ethiopia，8个字符