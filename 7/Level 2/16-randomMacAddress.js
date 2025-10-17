// 练习16：声明函数randomMacAddress，生成随机MAC地址（格式：XX:XX:XX:XX:XX:XX）
function randomMacAddress() {
  const chars = "0123456789ABCDEF";
  let mac = "";
  for (let i = 0; i < 6; i++) {
    const group = `${chars[Math.floor(Math.random() * 16)]}${chars[Math.floor(Math.random() * 16)]}`;
    mac += group + (i !== 5 ? ":" : "");
  }
  return mac;
}

// 调用函数
const randomMac = randomMacAddress();
console.log("随机MAC地址：", randomMac);