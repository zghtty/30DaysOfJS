// 练习5：声明函数convertHexaToRgb，将十六进制颜色转为RGB颜色
function convertHexaToRgb(hexa) {
  const hexaReg = /^#([0-9a-fA-F]{6})$/;
  if (!hexaReg.test(hexa)) {
    return "请输入合法的十六进制颜色（格式：#XXXXXX）";
  }
  const hexaStr = hexa.slice(1).toLowerCase();
  const r = parseInt(hexaStr.slice(0, 2), 16);
  const g = parseInt(hexaStr.slice(2, 4), 16);
  const b = parseInt(hexaStr.slice(4, 6), 16);
  return `rgb(${r},${g},${b})`;
}

// 调用示例
console.log(convertHexaToRgb("#ee33df"));
console.log(convertHexaToRgb("#00ff00"));