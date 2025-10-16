// 练习13：生成包含5个随机数的数组（随机数范围：0~1）
const randomNumbers = [];
// 循环5次，每次添加一个随机数
for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.random());
}

console.log("=== 5个随机数的数组 ===");
console.log(randomNumbers);