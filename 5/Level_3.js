import { countries } from './countries.js';

// 学生年龄数组操作
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// 排序数组并找出最小和最大年龄
const sortedAges = [...ages].sort((a, b) => a - b);
const minAge = sortedAges[0];
const maxAge = sortedAges[sortedAges.length - 1];
console.log('排序后的年龄:', sortedAges);
console.log('最小年龄:', minAge);
console.log('最大年龄:', maxAge);

// 找出中位数年龄
let medianAge;
const midIndex = Math.floor(sortedAges.length / 2);
if (sortedAges.length % 2 === 0) {
  medianAge = (sortedAges[midIndex - 1] + sortedAges[midIndex]) / 2;
} else {
  medianAge = sortedAges[midIndex];
}
console.log('中位数年龄:', medianAge);

// 计算平均年龄
const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;
console.log('平均年龄:', averageAge);

// 计算年龄范围
const ageRange = maxAge - minAge;
console.log('年龄范围:', ageRange);

// 比较(min - average)和(max - average)
const diffMinAvg = Math.abs(minAge - averageAge);
const diffMaxAvg = Math.abs(maxAge - averageAge);
console.log('min与平均值的差:', diffMinAvg);
console.log('max与平均值的差:', diffMaxAvg);
console.log('两者比较:', diffMinAvg > diffMaxAvg ? 'min离平均值更远' : 'max离平均值更远');

// 从国家数组中截取前10个国家
const firstTenCountries = countries.slice(0, 10);
console.log('前10个国家:', firstTenCountries);

// 找到国家数组中的中间国家
const middleCountryIndex = Math.floor(countries.length / 2);
const middleCountries = countries.length % 2 === 0
  ? countries.slice(middleCountryIndex - 1, middleCountryIndex + 1)
  : [countries[middleCountryIndex]];
console.log('中间国家:', middleCountries);

// 将国家数组分成两个部分
let firstHalf, secondHalf;
if (countries.length % 2 === 0) {
  firstHalf = countries.slice(0, countries.length / 2);
  secondHalf = countries.slice(countries.length / 2);
} else {
  firstHalf = countries.slice(0, Math.ceil(countries.length / 2));
  secondHalf = countries.slice(Math.ceil(countries.length / 2));
}
console.log('前半部分国家:', firstHalf);
console.log('后半部分国家:', secondHalf);