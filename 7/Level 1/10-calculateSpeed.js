// 练习10：计算运动物体速度（速度 = 总距离 / 总时间）
function calculateSpeed(distance, time) {
  if (distance <= 0 || time <= 0) {
    return "距离和时间必须为正数";
  }
  return distance / time;
}

// 调用函数（示例：距离100米，时间20秒）
const speed = calculateSpeed(100, 20);
console.log("运动速度：", speed, "米/秒");