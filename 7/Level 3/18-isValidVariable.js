// 练习18：声明函数isValidVariable，检查变量名是否合法
function isValidVariable(varName) {
  if (typeof varName !== "string") {
    return "请传入字符串类型的变量名";
  }
  const validReg = /^[\$\_a-zA-Z][\$\_a-zA-Z0-9]*$/;
  return validReg.test(varName) ? `${varName} 是合法的变量名` : `${varName} 是非法的变量名`;
}

// 调用示例
console.log(isValidVariable("userName"));
console.log(isValidVariable("123abc"));
console.log(isValidVariable("$total"));