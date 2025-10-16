// 练习15：生成6个字符的随机ID（包含小写字母和数字）
// 定义ID可用字符集
const charSet = "abcdefghijklmnopqrstuvwxyz0123456789";
let randomId = "";

// 循环6次，每次从字符集随机选一个字符
for (let i = 0; i < 6; i++) {
  // 生成0~字符集长度-1的随机索引
  const randomIndex = Math.floor(Math.random() * charSet.length);
  randomId += charSet[randomIndex];
}

console.log("=== 6个字符的随机ID ===");
console.log(randomId); // 示例输出：5j2khz