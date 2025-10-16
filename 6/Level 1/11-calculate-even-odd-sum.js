// 练习11：计算0到100的偶数和与奇数和
let evenSum = 0; // 偶数总和
let oddSum = 0;  // 奇数总和

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}

// 输出结果（预期：偶数和2550，奇数和2500）
console.log("The sum of all evens from 0 to 100 is " + evenSum + ". And the sum of all odds from 0 to 100 is " + oddSum + ".");