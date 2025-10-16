// 练习9：打印0到100的所有质数
console.log("=== 0到100的质数 ===");
// 质数定义：大于1的自然数，除了1和自身外无法被其他数整除
for (let i = 2; i <= 100; i++) {
  let isPrime = true; // 标记是否为质数
  // 检查i是否能被2到i-1之间的数整除
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break; // 一旦能整除，直接退出内层循环
    }
  }
  if (isPrime) {
    console.log(i);
  }
}