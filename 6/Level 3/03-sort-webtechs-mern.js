// 练习3：排序webTechs和mernStack数组
const webTechs = [
  "HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"
];
const mernStack = ["MongoDB", "Express", "React", "Node"];

// 复制并排序（避免修改原始数组）
const sortedWebTechs = [...webTechs].sort();
const sortedMernStack = [...mernStack].sort();

console.log("=== 排序后的webTechs ===");
console.log(sortedWebTechs);
console.log("\n=== 排序后的mernStack ===");
console.log(sortedMernStack);
// webTechs预期：CSS, HTML, JavaScript, MongoDB, Node, React, Redux
// mernStack预期：Express, MongoDB, Node, React