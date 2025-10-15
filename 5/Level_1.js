// 声明一个空数组
const emptyArray = [];

// 声明一个包含超过5个元素的数组
const numbers = [1, 2, 3, 4, 5, 6, 7];

// 获取数组的长度
console.log(numbers.length); // 7

// 获取数组的第一个元素、中间元素和最后一个元素
const firstItem = numbers[0];
const middleItem = numbers[Math.floor(numbers.length / 2)];
const lastItem = numbers[numbers.length - 1];
console.log(firstItem, middleItem, lastItem); // 1 4 7

// 声明mixedDataTypes数组并获取长度
const mixedDataTypes = [10, 'Hello', true, { name: 'John' }, [1, 2], null, undefined];
console.log(mixedDataTypes.length); // 7

// 声明itCompanies数组
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 打印数组
console.log(itCompanies);

// 打印公司数量
console.log(itCompanies.length); // 7

// 打印第一个、中间和最后一个公司
const firstCompany = itCompanies[0];
const middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
const lastCompany = itCompanies[itCompanies.length - 1];
console.log(firstCompany, middleCompany, lastCompany); // Facebook Apple Amazon

// 打印每家公司
for (const company of itCompanies) {
  console.log(company);
}

// 将每个公司名称转换为大写并打印
for (const company of itCompanies) {
  console.log(company.toUpperCase());
}

// 像句子一样打印数组
const companiesSentence = itCompanies.slice(0, -1).join(', ') + ' and ' + itCompanies[itCompanies.length - 1] + ' are big IT companies.';
console.log(companiesSentence);

// 检查公司是否存在
function checkCompany(company) {
  return itCompanies.includes(company) ? company : '公司未找到';
}
console.log(checkCompany('Google')); // Google
console.log(checkCompany('Tesla')); // 公司未找到

// 筛选出名称中包含多个"o"的公司
const companiesWithMultipleO = [];
for (const company of itCompanies) {
  let oCount = 0;
  for (const char of company) {
    if (char.toLowerCase() === 'o') oCount++;
  }
  if (oCount > 1) companiesWithMultipleO.push(company);
}
console.log(companiesWithMultipleO);

// 排序数组
const sortedCompanies = [...itCompanies].sort();
console.log(sortedCompanies);

// 反转数组
const reversedCompanies = [...itCompanies].reverse();
console.log(reversedCompanies);

// 切分出前3家公司
const firstThree = itCompanies.slice(0, 3);
console.log(firstThree);

// 切出最后3家公司
const lastThree = itCompanies.slice(-3);
console.log(lastThree);

// 切分出中间的公司
const middleIndex = Math.floor(itCompanies.length / 2);
const middleCompanies = itCompanies.length % 2 === 0 
  ? itCompanies.slice(middleIndex - 1, middleIndex + 1)
  : itCompanies.slice(middleIndex, middleIndex + 1);
console.log(middleCompanies);

// 移除第一家公司
const withoutFirst = itCompanies.slice(1);
console.log(withoutFirst);

// 移除中间的公司
const withoutMiddle = itCompanies.filter((_, index) => {
  if (itCompanies.length % 2 === 0) {
    return index !== middleIndex - 1 && index !== middleIndex;
  } else {
    return index !== middleIndex;
  }
});
console.log(withoutMiddle);

// 移除最后一家公司
const withoutLast = itCompanies.slice(0, -1);
console.log(withoutLast);

// 移除所有公司
const emptyCompanies = itCompanies.slice(0, 0); // 或 itCompanies = [];
console.log(emptyCompanies);