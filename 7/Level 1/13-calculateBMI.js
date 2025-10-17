// 练习13：计算BMI并判断体重类别（BMI = 体重kg / (身高m × 身高m)）
function calculateBMI(weight, height) {
  if (weight <= 0 || height <= 0) {
    return "体重和身高必须为正数";
  }
  const bmi = (weight / (height * height)).toFixed(1);
  let weightCategory = "";

  if (bmi < 18.5) {
    weightCategory = "体重过轻";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    weightCategory = "正常体重";
  } else if (bmi >= 25 && bmi <= 29.9) {
    weightCategory = "超重";
  } else {
    weightCategory = "肥胖";
  }

  return `BMI值：${bmi}，体重类别：${weightCategory}`;
}

// 调用函数（示例：体重60kg，身高1.75m）
const bmiResult = calculateBMI(60, 1.75);
console.log(bmiResult);