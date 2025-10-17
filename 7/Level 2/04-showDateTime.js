// 练习4：声明函数showDateTime，用Date对象显示"08/01/2020 04:08"格式的时间
function showDateTime() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const dateTimeStr = `${month}/${day}/${year} ${hours}:${minutes}`;
  console.log(dateTimeStr);
  return dateTimeStr;
}

// 调用函数
showDateTime();