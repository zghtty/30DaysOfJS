// 练习11：计算物质重量（重量 = 质量 × 重力，地球重力取9.8N/kg）
function calculateWeight(mass, gravity = 9.8) {
  if (mass <= 0) {
    return "质量必须为正数";
  }
  return mass * gravity;
}

// 调用示例1：地球重力下，质量50kg
const earthWeight = calculateWeight(50);
console.log("地球重量：", earthWeight, "N");
// 示例2：月球重力下，质量50kg
const moonWeight = calculateWeight(50, 1.62);
console.log("月球重量：", moonWeight, "N");