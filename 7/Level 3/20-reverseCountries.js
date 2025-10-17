// 练习20：声明函数reverseCountries，接收国家数组，复制后返回反转数组
function reverseCountries(countries) {
  if (!Array.isArray(countries)) {
    return "请传入数组类型的参数";
  }
  return countries.slice().reverse();
}

// 调用示例
const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark'];
const reversedCountries = reverseCountries(countries);
console.log("原数组：", countries);
console.log("反转后数组：", reversedCountries);