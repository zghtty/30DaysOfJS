// 练习1：生成任意长度的随机ID（参数：length，指定ID长度）
function generateRandomId(length) {
  const charSet = "abcdefghijklmnopqrstuvwxyz0123456789";
  let randomId = "";
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    randomId += charSet[randomIndex];
  }
  
  return randomId;
}

// 示例调用：生成12位和20位ID
console.log("=== 12位随机ID ===");
console.log(generateRandomId(12)); // 示例：fe3jo1gl124g
console.log("\n=== 20位随机ID ===");
console.log(generateRandomId(20)); // 示例：xkqci4utda1lmbelpkm03rba