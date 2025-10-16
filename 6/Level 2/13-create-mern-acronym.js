// 练习13：从mernStack数组创建"MERN"缩写
const mernStack = ["MongoDB", "Express", "React", "Node"];

// 取每个元素的首字母，转换为大写并拼接
const mernAcronym = mernStack
  .map(function(tech) {
    return tech[0].toUpperCase();
  }) // 取首字母并大写
  .join(""); // 拼接成字符串

console.log("=== MERN缩写 ===");
console.log(mernAcronym); // 预期：MERN