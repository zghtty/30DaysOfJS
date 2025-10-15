// Level 1 练习
// 1. 声明变量并检查数据类型
let firstName = 'Zhang';
let lastName = 'San';
let country = 'China';
let city = 'Beijing';
let age = 28;
let isMarried = false;
let year = 2025;

// 打印各变量类型
console.log('firstName 类型:', typeof firstName); // string
console.log('lastName 类型:', typeof lastName);   // string
console.log('country 类型:', typeof country);     // string
console.log('city 类型:', typeof city);           // string
console.log('age 类型:', typeof age);             // number
console.log('isMarried 类型:', typeof isMarried); // boolean
console.log('year 类型:', typeof year);           // number

// 2. 检查'10'与10的类型是否相等
console.log('typeof "10" === typeof 10:', typeof '10' === typeof 10); // false

// 3. 检查parseInt('9.8')是否等于10
console.log('parseInt("9.8") === 10:', parseInt('9.8') === 10); // false（parseInt取整为9）

// 4. 三个真值语句（truthy）
console.log(3 > 2);        // true（比较结果为true）
console.log('hello');      // 非空字符串为truthy
console.log({ name: 'A' });// 非空对象为truthy

// 5. 三个假值语句（falsy）
console.log(0);            // 数字0为falsy
console.log('');           // 空字符串为falsy
console.log(undefined);    // undefined为falsy

// 6. 比较表达式结果确认
console.log(4 > 3);        // true
console.log(4 >= 3);       // true
console.log(4 < 3);        // false
console.log(4 <= 3);       // false
console.log(4 == 4);       // true
console.log(4 === 4);      // true
console.log(4 != 4);       // false
console.log(4 !== 4);      // false
console.log(4 != '4');     // false（==会自动转换类型，4与'4'值相等）
console.log(4 == '4');     // true
console.log(4 === '4');    // false（===严格比较类型，number≠string）

// 7. 计算字符串长度并写假比较语句
let str1 = 'python';
let str2 = 'jargon';
console.log('python 长度:', str1.length); // 6
console.log('jargon 长度:', str2.length); // 5
// 假比较语句（6 > 5为true，取反后为false）
console.log('python长度 > jargon长度?', str1.length > str2.length); // true
console.log('假比较: python长度 < jargon长度?', str1.length < str2.length); // false

// 8. 逻辑表达式结果确认
console.log(4 > 3 && 10 < 12);          // true（两个条件都为真）
console.log(4 > 3 && 10 > 12);          // false（第二个条件为假）
console.log(4 > 3 || 10 < 12);          // true（至少一个条件为真）
console.log(4 > 3 || 10 > 12);          // true（第一个条件为真）
console.log(!(4 > 3));                  // false（4>3为真，取反为假）
console.log(!(4 < 3));                  // true（4<3为假，取反为真）
console.log(!(false));                  // true（false取反为真）
console.log(!(4 > 3 && 10 < 12));       // false（原表达式为真，取反为假）
console.log(!(4 > 3 && 10 > 12));       // true（原表达式为假，取反为真）
console.log(!(4 === '4'));              // true（4==='4'为假，取反为真）

// 9. 检查"on"是否在dragon和python中（都不存在则返回true）
let wordA = 'dragon';
let wordB = 'python';
let hasNoOn = !wordA.includes('on') && !wordB.includes('on');
console.log('dragon和python中都没有"on"?', hasNoOn); // true（dragon含'gon'，python含'thon'，均无'on'）

// 10. 使用Date对象获取时间信息
const today = new Date();
// 今天的年份（4位）
console.log('今年:', today.getFullYear());
// 今天的月份（0-11，0代表1月）
console.log('当前月份（数字）:', today.getMonth() + 1); // 加1后与实际月份一致
// 今天的日期（1-31）
console.log('今天几号:', today.getDate());
// 今天的星期（0-6，0代表周日）
console.log('当前星期（数字）:', today.getDay());
// 现在的小时（0-23）
console.log('当前小时:', today.getHours());
// 现在的分钟（0-59）
console.log('当前分钟:', today.getMinutes());
// 从1970年1月1日到现在的秒数（getTime()返回毫秒，除以1000取整）
console.log('1970年至今的秒数:', Math.floor(today.getTime() / 1000));


// Level 2 练习
// 1. 计算三角形面积（用户输入底和高）
let base = prompt('Enter base:');
let height = prompt('Enter height:');
// 将输入的字符串转为数字，计算面积
let triangleArea = 0.5 * Number(base) * Number(height);
alert(`The area of the triangle is ${triangleArea}`);

// 2. 计算三角形周长（用户输入三边）
let sideA = prompt('Enter side a:');
let sideB = prompt('Enter side b:');
let sideC = prompt('Enter side c:');
let trianglePerimeter = Number(sideA) + Number(sideB) + Number(sideC);
alert(`The perimeter of the triangle is ${trianglePerimeter}`);

// 3. 计算长方形面积和周长（用户输入长和宽）
let length = prompt('Enter length of rectangle:');
let width = prompt('Enter width of rectangle:');
let rectArea = Number(length) * Number(width);
let rectPerimeter = 2 * (Number(length) + Number(width));
alert(`Rectangle area: ${rectArea}, Perimeter: ${rectPerimeter}`);

// 4. 计算圆形面积和周长（用户输入半径，π=3.14）
let radius = prompt('Enter radius of circle:');
const pi = 3.14;
let circleArea = pi * Number(radius) * Number(radius);
let circleCircumference = 2 * pi * Number(radius);
alert(`Circle area: ${circleArea}, Circumference: ${circleCircumference}`);

// 5. 计算y=2x-2的斜率、x截距、y截距
// 直线方程y=mx+b，m=斜率，b=y截距；x截距为y=0时的x值
console.log('y=2x-2 的斜率:', 2);                // 斜率m=2
console.log('y=2x-2 的y截距:', -2);              // y截距b=-2
console.log('y=2x-2 的x截距:', 1);               // 0=2x-2 → x=1

// 6. 计算点(2,2)和(6,10)之间的斜率
let x1 = 2, y1 = 2;
let x2 = 6, y2 = 10;
let slope = (y2 - y1) / (x2 - x1);
console.log('点(2,2)与(6,10)的斜率:', slope); // (10-2)/(6-2)=8/4=2

// 7. 比较两个斜率
console.log('两个斜率是否相等:', 2 === slope); // true（均为2）

// 8. 计算y=x²+6x+9，找出y=0时的x值
// 因式分解：x²+6x+9=(x+3)²，y=0时x=-3
let xValue1 = -3;
let yValue1 = xValue1 ** 2 + 6 * xValue1 + 9;
console.log(`x=${xValue1}时，y=${yValue1}`); // x=-3，y=0
let xValue2 = 0;
let yValue2 = xValue2 ** 2 + 6 * xValue2 + 9;
console.log(`x=${xValue2}时，y=${yValue2}`); // x=0，y=9

// 9. 计算个人工资（用户输入工时和时薪）
let hours = prompt('Enter hours:');
let rate = prompt('Enter rate per hour:');
let weeklyEarning = Number(hours) * Number(rate);
alert(`Your weekly earning is ${weeklyEarning}`);

// 10. 判断名字长度（长/短）
let myName = 'ZhangSan'; // 假设名字为ZhangSan，长度为8
if (myName.length > 7) {
  console.log('your name is long');
} else {
  console.log('your name is short');
} // 输出：your name is long

// 11. 比较名字和姓氏长度
let firstName2 = 'Asabeneh';
let lastName2 = 'Yetayeh';
if (firstName2.length > lastName2.length) {
  console.log(`Your first name, ${firstName2} is longer than your family name, ${lastName2}`);
} else if (firstName2.length < lastName2.length) {
  console.log(`Your first name, ${firstName2} is shorter than your family name, ${lastName2}`);
} else {
  console.log(`Your first name, ${firstName2} is as long as your family name, ${lastName2}`);
} // 输出：Your first name, Asabeneh is longer than your family name, Yetayeh（Asabeneh长度8，Yetayeh长度7）

// 12. 比较年龄差距
let myAge = 250;
let yourAge = 25;
let ageDiff = myAge - yourAge;
console.log(`I am ${ageDiff} years older than you.`); // 输出：I am 225 years older than you.

// 13. 根据出生年份判断是否允许驾驶
let birthYear = prompt('Enter birth year:');
let currentYear = new Date().getFullYear();
let userAge = currentYear - Number(birthYear);
if (userAge >= 18) {
  alert(`You are ${userAge}. You are old enough to drive`);
} else {
  let waitYears = 18 - userAge;
  alert(`You are ${userAge}. You will be allowed to drive after ${waitYears} years.`);
}

// 14. 计算活过的秒数（假设活N年，按100年标准计算）
let liveYears = prompt('Enter number of years you live:');
// 1年=365天，1天=24小时，1小时=3600秒
let secondsLived = Number(liveYears) * 365 * 24 * 3600;
alert(`You lived ${secondsLived} seconds.`);

// 15. 创建人类可读时间格式（YYYY-MM-DD HH:mm 等）
const now = new Date();
let yearNow = now.getFullYear();
let monthNow = now.getMonth() + 1; // 月份0-11，加1后补0
let dateNow = now.getDate();
let hoursNow = now.getHours();
let minutesNow = now.getMinutes();

// 补0处理（确保月份、日期、小时、分钟为2位）
monthNow = monthNow < 10 ? '0' + monthNow : monthNow;
dateNow = dateNow < 10 ? '0' + dateNow : dateNow;
hoursNow = hoursNow < 10 ? '0' + hoursNow : hoursNow;
minutesNow = minutesNow < 10 ? '0' + minutesNow : minutesNow;

// 三种格式输出
console.log(`${yearNow}-${monthNow}-${dateNow} ${hoursNow}:${minutesNow}`); // YYYY-MM-DD HH:mm
console.log(`${dateNow}-${monthNow}-${yearNow} ${hoursNow}:${minutesNow}`); // DD-MM-YYYY HH:mm
console.log(`${dateNow}/${monthNow}/${yearNow} ${hoursNow}:${minutesNow}`); // DD/MM/YYYY HH:mm


// Level 3 练习
// 创建人类可读时间格式（小时和分钟强制为2位）
const currentTime = new Date();
// 提取时间组件
let y = currentTime.getFullYear();
let m = currentTime.getMonth() + 1;
let d = currentTime.getDate();
let h = currentTime.getHours();
let min = currentTime.getMinutes();

// 补0函数（通用处理2位格式）
function addZero(num) {
  return num < 10 ? '0' + num : num;
}

// 格式化时间（YYYY-MM-DD HH:mm）
let formattedTime = `${y}-${addZero(m)}-${addZero(d)} ${addZero(h)}:${addZero(min)}`;
console.log('格式化时间:', formattedTime); // 示例输出：2025-10-15 09:05（若当前时间为9点5分）