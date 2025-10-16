// 练习14：遍历技术数组并打印元素
const techArray = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

console.log("=== 技术数组元素 ===");
// 使用for循环遍历（替换for of，兼容性更好）
for (let i = 0; i < techArray.length; i++) {
  console.log(techArray[i]);
}