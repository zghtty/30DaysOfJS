// 练习12：创建webTechs信息数组（格式：[技术名, 名称长度]）
const webTechs = [
  "HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"
];

// 生成信息数组
const webTechInfo = webTechs.map(function(tech) {
  return [tech, tech.length];
});

console.log("=== webTechs信息数组 ===");
console.log(webTechInfo);
// 预期输出：[["HTML", 4], ["CSS", 3], ["JavaScript", 10], ...]