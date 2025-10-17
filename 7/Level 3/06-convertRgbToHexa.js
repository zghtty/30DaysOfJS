// 练习6：声明函数convertRgbToHexa，将RGB颜色转为十六进制颜色
function convertRgbToHexa(rgb) {
  const rgbReg = /^rgb\((\d{1,3}),(d{1,3}),(d{1,3})\)$/;
  const match = rgb.match(rgbReg);
  if (!match) {
    return "请输入合法的RGB颜色（格式：rgb(xxx,xxx,xxx)）";
  }
  const [, rStr, gStr, bStr] = match;
  const r = parseInt(rStr);
  const g = parseInt(gStr);
  const b = parseInt(bStr);
  if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
    return "RGB值必须在0-255之间";
  }
  const toHex = num => num.toString(16).padStart(2, "0").toUpperCase();
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// 调用示例
console.log(convertRgbToHexa("rgb(238,51,223)"));
console.log(convertRgbToHexa("rgb(0,255,0)"));