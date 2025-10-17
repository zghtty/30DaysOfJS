// 1. 创建一个名为dog的空对象
const dog = {};

// 2. 在控制台打印dog对象
console.log("Level 1 - 空dog对象:", dog);

// 3. 为dog对象添加属性和方法
dog.name = "Buddy";
dog.legs = 4;
dog.color = "Golden";
dog.age = 3;
dog.bark = function() {
  return "woof woof";
};

// 4. 从dog对象中获取属性值
console.log("\nLevel 1 - 获取dog属性:");
console.log("名称:", dog.name);
console.log("腿的数量:", dog.legs);
console.log("颜色:", dog.color);
console.log("年龄:", dog.age);
console.log("吠叫:", dog.bark());

// 5. 为dog对象添加新属性
dog.breed = "Labrador";
dog.getDogInfo = function() {
  return `${this.name}是一只${this.color}的${this.breed}，今年${this.age}岁，有${this.legs}条腿`;
};

console.log("\nLevel 1 - 新属性信息:", dog.getDogInfo());