// 练习9：计算物质密度（密度 = 质量 / 体积）
function calculateDensity(mass, volume) {
  if (mass <= 0 || volume <= 0) {
    return "质量和体积必须为正数";
  }
  return mass / volume;
}

// 调用函数（示例：质量10kg，体积2m³）
const density = calculateDensity(10, 2);
console.log("物质密度：", density, "kg/m³");