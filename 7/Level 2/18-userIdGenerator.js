// 练习18：声明函数userIdGenerator，生成7个字符的随机ID
function userIdGenerator() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let userId = "";
  for (let i = 0; i < 7; i++) {
    userId += chars[Math.floor(Math.random() * chars.length)];
  }
  return userId;
}

// 调用函数
const userId = userIdGenerator();
console.log("7字符随机ID：", userId);