// 练习12：以数组形式输出0到100的偶数和与奇数和
let evenSum = 0;
let oddSum = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}

// 数组格式：[偶数和, 奇数和]（预期：[2550, 2500]）
const sumArray = [evenSum, oddSum];
console.log(sumArray);