// 练习12：摄氏度转华氏度（°F = (°C × 9/5) + 32）
function convertCelsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return `${celsius}°C = ${fahrenheit.toFixed(1)}°F`;
}

// 调用函数（示例：25°C）
const fahrenheitResult = convertCelsiusToFahrenheit(25);
console.log(fahrenheitResult);