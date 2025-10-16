// 练习1：使用for、while、do while循环迭代0到10
console.log("=== 使用for循环迭代0到10 ===");
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

console.log("\n=== 使用while循环迭代0到10 ===");
let whileI = 0;
while (whileI <= 10) {
  console.log(whileI);
  whileI++;
}

console.log("\n=== 使用do while循环迭代0到10 ===");
let doWhileI = 0;
do {
  console.log(doWhileI);
  doWhileI++;
} while (doWhileI <= 10);