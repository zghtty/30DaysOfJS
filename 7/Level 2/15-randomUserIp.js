// 练习15：声明函数randomUserIp，生成随机IP地址（IPv4格式）
function randomUserIp() {
  const getRandomSegment = () => Math.floor(Math.random() * 256);
  return `${getRandomSegment()}.${getRandomSegment()}.${getRandomSegment()}.${getRandomSegment()}`;
}

// 调用函数
const randomIp = randomUserIp();
console.log("随机IP地址：", randomIp);