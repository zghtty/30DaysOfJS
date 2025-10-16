// 练习14：生成包含5个唯一随机数的数组（随机数范围：0~99）
const uniqueRandoms = [];

// 循环直到数组长度达到5
while (uniqueRandoms.length < 5) {
  // 生成0~99的整数随机数
  const randomNum = Math.floor(Math.random() * 100);
  // 检查是否已存在，不存在则添加
  if (!uniqueRandoms.includes(randomNum)) {
    uniqueRandoms.push(randomNum);
  }
}

console.log("=== 5个唯一随机数的数组 ===");
console.log(uniqueRandoms);