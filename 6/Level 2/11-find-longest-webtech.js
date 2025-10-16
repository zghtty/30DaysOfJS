// 练习11：查找webTechs数组中最长的单词
const webTechs = [
  "HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"
];

let longestTech = ""; // 存储最长的技术单词

// 遍历数组，比较长度
for (let i = 0; i < webTechs.length; i++) {
  const tech = webTechs[i];
  if (tech.length > longestTech.length) {
    longestTech = tech;
  }
}

console.log("=== webTechs中最长的单词 ===");
console.log(longestTech); // 预期：JavaScript（10个字符）