import { countries } from './countries.js';
import { webTechs } from './web_techs.js';

// 处理文本并计算单词数量
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
// 移除标点并转换为数组
const words = text.replace(/[.,]/g, '').split(' ');
console.log(words);
console.log(words.length); // 13

// 购物车操作
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// 在开头添加'Meat'（如果不存在）
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}

// 在末尾添加'Sugar'（如果不存在）
if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}

// 移除'Honey'（假设对蜂蜜过敏）
const isAllergicToHoney = true;
if (isAllergicToHoney) {
  const honeyIndex = shoppingCart.indexOf('Honey');
  if (honeyIndex !== -1) {
    shoppingCart.splice(honeyIndex, 1);
  }
}

// 将'Tea'修改为'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart);

// 检查'Ethiopia'是否存在于国家数组中
if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA');
} else {
  countries.push('Ethiopia');
}

// 检查'Sass'是否存在于webTechs数组中
if (webTechs.includes('Sass')) {
  console.log('Sass是一种CSS预处理器');
} else {
  webTechs.push('Sass');
  console.log(webTechs);
}

// 连接前后端技术数组
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);