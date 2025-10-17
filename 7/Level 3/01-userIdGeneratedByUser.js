// 练习1：声明函数userIdGeneratedByUser，通过prompt获取输入生成ID（浏览器环境运行）
function userIdGeneratedByUser() {
  const charCount = prompt("请输入每个ID的字符数量：");
  const idCount = prompt("请输入需要生成的ID数量：");
  const charNum = parseInt(charCount);
  const idNum = parseInt(idCount);
  if (isNaN(charNum) || isNaN(idNum) || charNum < 1 || idNum < 1) {
    alert("请输入正整数！");
    return;
  }
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let ids = "";
  for (let i = 0; i < idNum; i++) {
    let id = "";
    for (let j = 0; j < charNum; j++) {
      id += chars[Math.floor(Math.random() * chars.length)];
    }
    ids += id + "\n";
  }
  alert(`生成的${idNum}个ID：\n${ids}`);
  return ids;
}

// 调用函数（需在浏览器环境运行）
// userIdGeneratedByUser();