// 练习14：根据月份判断季节（12-2月冬季，3-5月春季，6-8月夏季，9-11月秋季）
function checkSeason(month) {
  if (typeof month !== "number" || month < 1 || month > 12 || !Number.isInteger(month)) {
    return "请输入1-12之间的整数月份";
  }

  let season = "";
  switch (true) {
    case month === 12 || month === 1 || month === 2:
      season = "Winter（冬季）";
      break;
    case month >= 3 && month <= 5:
      season = "Spring（春季）";
      break;
    case month >= 6 && month <= 8:
      season = "Summer（夏季）";
      break;
    case month >= 9 && month <= 11:
      season = "Autumn（秋季）";
      break;
  }
  return `月份${month}对应的季节：${season}`;
}

// 调用函数（示例：月份4）
const seasonResult = checkSeason(4);
console.log(seasonResult);