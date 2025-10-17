// 练习10：声明函数isEmpty，接收参数，检查是否为空
function isEmpty(value) {
  if (value === null || value === undefined) return true;
  if (typeof value === "string") return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === "object") return Object.keys(value).length === 0;
  return false;
}

// 调用示例
console.log(isEmpty(null));
console.log(isEmpty("   "));
console.log(isEmpty([1, 2]));