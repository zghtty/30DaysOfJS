// 练习15：声明函数isPrime，检查数字是否为质数
function isPrime(num) {
  if (typeof num !== "number" || num <= 1 || !Number.isInteger(num)) {
    return `${num} 不是质数（质数必须是大于1的整数）`;
  }
  if (num === 2) return `${num} 是质数`;
  if (num % 2 === 0) return `${num} 不是质数（能被2整除）`;
  const sqrtNum = Math.sqrt(num);
  for (let i = 3; i <= sqrtNum; i += 2) {
    if (num % i === 0) return `${num} 不是质数（能被${i}整除）`;
  }
  return `${num} 是质数`;
}

// 调用示例
console.log(isPrime(7));
console.log(isPrime(12));
console.log(isPrime(17));