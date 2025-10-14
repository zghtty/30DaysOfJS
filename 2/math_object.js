const PI = Math.PI; // 获取圆周率π的值

console.log(PI);                            // 3.141592653589793

// 四舍五入到最接近的整数
// 若小数部分大于等于0.5则向上取整，小于0.5则向下取整

console.log(Math.round(PI));                // 3，将值四舍五入到最接近的整数

console.log(Math.round(9.81));              // 10

console.log(Math.floor(PI));                // 3，向下取整（舍掉小数部分）

console.log(Math.ceil(PI));                 // 4，向上取整（进一位）

console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5，返回参数中的最小值

console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20，返回参数中的最大值

const randNum = Math.random(); // 生成0到0.999999之间的随机数
console.log(randNum);

// 生成0到10之间的随机数

const num = Math.floor(Math.random() * 11); // 生成0到10之间的随机整数
console.log(num);

// 绝对值
console.log(Math.abs(-10));      // 10

// 平方根
console.log(Math.sqrt(100));     // 10

console.log(Math.sqrt(2));       // 1.4142135623730951

// 幂运算
console.log(Math.pow(3, 2));     // 9（3的2次方）

console.log(Math.E);             // 2.718（自然常数e）

// 对数运算
// 返回以E为底的x的自然对数，即Math.log(x)
console.log(Math.log(2));        // 0.6931471805599453
console.log(Math.log(10));       // 2.302585092994046

// 分别返回2和10的自然对数（预定义常量）
console.log(Math.LN2);           // 0.6931471805599453（ln2的值）
console.log(Math.LN10);          // 2.302585092994046（ln10的值）

// 三角函数
Math.sin(0);    // 正弦函数（参数为弧度）
Math.sin(60);   // 计算60弧度的正弦值

Math.cos(0);    // 余弦函数（参数为弧度）
Math.cos(60);   // 计算60弧度的余弦值