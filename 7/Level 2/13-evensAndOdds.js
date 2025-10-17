// 练习13：声明函数evensAndOdds，接收正整数n，统计0到n的偶数和奇数个数
function evensAndOdds(n) {
  if (typeof n !== "number" || n < 1 || !Number.isInteger(n)) {
    console.log("请输入正整数");
    return;
  }
  let evenCount = 0, oddCount = 0;
  for (let i = 0; i <= n; i++) {
    i % 2 === 0 ? evenCount++ : oddCount++;
  }
  console.log(`The number of odds are ${oddCount}.`);
  console.log(`The number of evens are ${evenCount}.`);
}

// 调用示例（n=100）
evensAndOdds(100);