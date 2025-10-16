// 练习2：使用for、while、do while循环从10迭代到0
console.log("=== 使用for循环从10迭代到0 ===");
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

console.log("\n=== 使用while循环从10迭代到0 ===");
let whileI = 10;
while (whileI >= 0) {
  console.log(whileI);
  whileI--;
}

console.log("\n=== 使用do while循环从10迭代到0 ===");
let doWhileI = 10;
do {
  console.log(doWhileI);
  doWhileI--;
} while (doWhileI >= 0);