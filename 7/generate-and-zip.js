const fs = require('fs');
const path = require('path');


// -------------------------- 所有练习文件内容（按Level分类） --------------------------
const level1Files = {
  '01-print-fullName.js': '// 练习1：声明函数fullName，打印全名\nfunction fullName() {\n  console.log("Zhang San"); // 替换为你的全名\n}\n\n// 调用函数\nfullName();',

  '02-return-fullName.js': '// 练习2：声明函数fullName，接收firstName和lastName参数，返回全名\nfunction fullName(firstName, lastName) {\n  return `${firstName} ${lastName}`;\n}\n\n// 调用函数（示例：firstName为"Li"，lastName为"Si"）\nconst myFullName = fullName("Li", "Si");\nconsole.log("我的全名：", myFullName);',

  '03-addNumbers.js': '// 练习3：声明函数addNumbers，接收两个参数，返回总和\nfunction addNumbers(num1, num2) {\n  return num1 + num2;\n}\n\n// 调用函数（示例：2和3相加）\nconst sum = addNumbers(2, 3);\nconsole.log("两数之和：", sum);',

  '04-areaOfRectangle.js': '// 练习4：计算矩形面积（面积 = 长 × 宽）\nfunction areaOfRectangle(length, width) {\n  if (length <= 0 || width <= 0) {\n    return "长和宽必须为正数";\n  }\n  return length * width;\n}\n\n// 调用函数（示例：长5，宽3）\nconst area = areaOfRectangle(5, 3);\nconsole.log("矩形面积：", area);',

  '05-perimeterOfRectangle.js': '// 练习5：计算长方形周长（周长 = 2 × (长 + 宽)）\nfunction perimeterOfRectangle(length, width) {\n  if (length <= 0 || width <= 0) {\n    return "长和宽必须为正数";\n  }\n  return 2 * (length + width);\n}\n\n// 调用函数（示例：长5，宽3）\nconst perimeter = perimeterOfRectangle(5, 3);\nconsole.log("长方形周长：", perimeter);',

  '06-volumeOfRectPrism.js': '// 练习6：计算长方体体积（体积 = 长 × 宽 × 高）\nfunction volumeOfRectPrism(length, width, height) {\n  if (length <= 0 || width <= 0 || height <= 0) {\n    return "长、宽、高必须为正数";\n  }\n  return length * width * height;\n}\n\n// 调用函数（示例：长5，宽3，高2）\nconst volume = volumeOfRectPrism(5, 3, 2);\nconsole.log("长方体体积：", volume);',

  '07-areaOfCircle.js': '// 练习7：计算圆面积（面积 = π × r × r，π取Math.PI）\nfunction areaOfCircle(radius) {\n  if (radius <= 0) {\n    return "半径必须为正数";\n  }\n  return Math.PI * radius * radius;\n}\n\n// 调用函数（示例：半径4）\nconst circleArea = areaOfCircle(4);\nconsole.log("圆面积：", circleArea.toFixed(2));',

  '08-circumOfCircle.js': '// 练习8：计算圆周长（周长 = 2 × π × r）\nfunction circumOfCircle(radius) {\n  if (radius <= 0) {\n    return "半径必须为正数";\n  }\n  return 2 * Math.PI * radius;\n}\n\n// 调用函数（示例：半径4）\nconst circumference = circumOfCircle(4);\nconsole.log("圆周长：", circumference.toFixed(2));',

  '09-calculateDensity.js': '// 练习9：计算物质密度（密度 = 质量 / 体积）\nfunction calculateDensity(mass, volume) {\n  if (mass <= 0 || volume <= 0) {\n    return "质量和体积必须为正数";\n  }\n  return mass / volume;\n}\n\n// 调用函数（示例：质量10kg，体积2m³）\nconst density = calculateDensity(10, 2);\nconsole.log("物质密度：", density, "kg/m³");',

  '10-calculateSpeed.js': '// 练习10：计算运动物体速度（速度 = 总距离 / 总时间）\nfunction calculateSpeed(distance, time) {\n  if (distance <= 0 || time <= 0) {\n    return "距离和时间必须为正数";\n  }\n  return distance / time;\n}\n\n// 调用函数（示例：距离100米，时间20秒）\nconst speed = calculateSpeed(100, 20);\nconsole.log("运动速度：", speed, "米/秒");',

  '11-calculateWeight.js': '// 练习11：计算物质重量（重量 = 质量 × 重力，地球重力取9.8N/kg）\nfunction calculateWeight(mass, gravity = 9.8) {\n  if (mass <= 0) {\n    return "质量必须为正数";\n  }\n  return mass * gravity;\n}\n\n// 调用示例1：地球重力下，质量50kg\nconst earthWeight = calculateWeight(50);\nconsole.log("地球重量：", earthWeight, "N");\n// 示例2：月球重力下，质量50kg\nconst moonWeight = calculateWeight(50, 1.62);\nconsole.log("月球重量：", moonWeight, "N");',

  '12-convertCelsiusToFahrenheit.js': '// 练习12：摄氏度转华氏度（°F = (°C × 9/5) + 32）\nfunction convertCelsiusToFahrenheit(celsius) {\n  const fahrenheit = (celsius * 9) / 5 + 32;\n  return `${celsius}°C = ${fahrenheit.toFixed(1)}°F`;\n}\n\n// 调用函数（示例：25°C）\nconst fahrenheitResult = convertCelsiusToFahrenheit(25);\nconsole.log(fahrenheitResult);',

  '13-calculateBMI.js': '// 练习13：计算BMI并判断体重类别（BMI = 体重kg / (身高m × 身高m)）\nfunction calculateBMI(weight, height) {\n  if (weight <= 0 || height <= 0) {\n    return "体重和身高必须为正数";\n  }\n  const bmi = (weight / (height * height)).toFixed(1);\n  let weightCategory = "";\n\n  if (bmi < 18.5) {\n    weightCategory = "体重过轻";\n  } else if (bmi >= 18.5 && bmi <= 24.9) {\n    weightCategory = "正常体重";\n  } else if (bmi >= 25 && bmi <= 29.9) {\n    weightCategory = "超重";\n  } else {\n    weightCategory = "肥胖";\n  }\n\n  return `BMI值：${bmi}，体重类别：${weightCategory}`;\n}\n\n// 调用函数（示例：体重60kg，身高1.75m）\nconst bmiResult = calculateBMI(60, 1.75);\nconsole.log(bmiResult);',

  '14-checkSeason.js': '// 练习14：根据月份判断季节（12-2月冬季，3-5月春季，6-8月夏季，9-11月秋季）\nfunction checkSeason(month) {\n  if (typeof month !== "number" || month < 1 || month > 12 || !Number.isInteger(month)) {\n    return "请输入1-12之间的整数月份";\n  }\n\n  let season = "";\n  switch (true) {\n    case month === 12 || month === 1 || month === 2:\n      season = "Winter（冬季）";\n      break;\n    case month >= 3 && month <= 5:\n      season = "Spring（春季）";\n      break;\n    case month >= 6 && month <= 8:\n      season = "Summer（夏季）";\n      break;\n    case month >= 9 && month <= 11:\n      season = "Autumn（秋季）";\n      break;\n  }\n  return `月份${month}对应的季节：${season}`;\n}\n\n// 调用函数（示例：月份4）\nconst seasonResult = checkSeason(4);\nconsole.log(seasonResult);',

  '15-findMax.js': '// 练习15：接收三个参数，不使用Math.max，返回最大值\nfunction findMax(num1, num2, num3) {\n  let max = num1;\n  if (num2 > max) max = num2;\n  if (num3 > max) max = num3;\n  return max;\n}\n\n// 调用示例\nconsole.log("最大值（0,10,5）：", findMax(0, 10, 5));\nconsole.log("最大值（0,-10,-2）：", findMax(0, -10, -2));'
};

const level2Files = {
  '01-solveLinEquation.js': '// 练习1：计算线性方程 ax + by + c = 0 的值（返回等式结果，理想值为0）\nfunction solveLinEquation(a, b, x, y, c) {\n  return a * x + b * y + c;\n}\n\n// 调用函数（示例：a=2, b=3, x=1, y=2, c=-8 → 2*1 + 3*2 -8 = 0）\nconst linResult = solveLinEquation(2, 3, 1, 2, -8);\nconsole.log("线性方程结果（理想值0）：", linResult);',

  '02-solveQuadEquation.js': '// 练习2：解二次方程 ax² + bx + c = 0（返回根的集合）\nfunction solveQuadEquation(a = 0, b = 0, c = 0) {\n  if (a === 0) {\n    if (b === 0) {\n      return c === 0 ? "方程有无数解" : "方程无解";\n    }\n    const x = -c / b;\n    return { [x]: x };\n  }\n\n  const delta = b * b - 4 * a * c;\n  if (delta < 0) {\n    return "方程无实数根";\n  } else if (delta === 0) {\n    const x = -b / (2 * a);\n    return { [x]: x };\n  } else {\n    const x1 = (-b + Math.sqrt(delta)) / (2 * a);\n    const x2 = (-b - Math.sqrt(delta)) / (2 * a);\n    return { [x1]: x1, [x2]: x2 };\n  }\n}\n\n// 调用示例\nconsole.log(solveQuadEquation());\nconsole.log(solveQuadEquation(1, 4, 4));\nconsole.log(solveQuadEquation(1, -1, -2));',

  '03-printArray.js': '// 练习3：声明函数printArray，接收数组参数，打印每个值\nfunction printArray(arr) {\n  if (!Array.isArray(arr)) {\n    console.log("请传入数组类型的参数");\n    return;\n  }\n  arr.forEach((item, index) => {\n    console.log(`数组第${index + 1}个元素：${item}`);\n  });\n}\n\n// 调用函数（示例数组）\nprintArray(["HTML", "CSS", "JavaScript"]);',

  '04-showDateTime.js': '// 练习4：声明函数showDateTime，用Date对象显示"08/01/2020 04:08"格式的时间\nfunction showDateTime() {\n  const now = new Date();\n  const month = String(now.getMonth() + 1).padStart(2, "0");\n  const day = String(now.getDate()).padStart(2, "0");\n  const year = now.getFullYear();\n  const hours = String(now.getHours()).padStart(2, "0");\n  const minutes = String(now.getMinutes()).padStart(2, "0");\n  const dateTimeStr = `${month}/${day}/${year} ${hours}:${minutes}`;\n  console.log(dateTimeStr);\n  return dateTimeStr;\n}\n\n// 调用函数\nshowDateTime();',

  '05-swapValues.js': '// 练习5：声明函数swapValues，交换x和y的值（返回交换后的对象）\nfunction swapValues(x, y) {\n  [x, y] = [y, x]; // 解构赋值交换\n  return { x, y };\n}\n\n// 调用函数（示例：3和4交换）\nconst swapped = swapValues(3, 4);\nconsole.log("交换后：x =", swapped.x, "，y =", swapped.y);',

  '06-reverseArray.js': '// 练习6：声明函数reverseArray，接收数组，不使用reverse方法，返回反转数组\nfunction reverseArray(arr) {\n  if (!Array.isArray(arr)) {\n    return "请传入数组类型的参数";\n  }\n  const reversedArr = [];\n  for (let i = arr.length - 1; i >= 0; i--) {\n    reversedArr.push(arr[i]);\n  }\n  return reversedArr;\n}\n\n// 调用示例\nconsole.log(reverseArray([1, 2, 3, 4, 5]));\nconsole.log(reverseArray(["A", "B", "C"]));',

  '07-capitalizeArray.js': '// 练习7：声明函数capitalizeArray，接收数组，返回所有元素大写的数组（假设元素为字符串）\nfunction capitalizeArray(arr) {\n  if (!Array.isArray(arr)) {\n    return "请传入数组类型的参数";\n  }\n  return arr.map(item => typeof item === "string" ? item.toUpperCase() : item);\n}\n\n// 调用示例\nconsole.log(capitalizeArray(["apple", "banana", "cherry"]));',

  '08-addItem.js': '// 练习8：声明函数addItem，接收item参数，返回添加item后的数组\nfunction addItem(item) {\n  const initialArray = [];\n  initialArray.push(item);\n  return initialArray;\n}\n\n// 调用示例（添加"book"到数组）\nconst newArray = addItem("book");\nconsole.log("添加item后的数组：", newArray);',

  '09-removeItem.js': '// 练习9：声明函数removeItem，接收索引参数，返回删除该索引元素后的数组\nfunction removeItem(index) {\n  const initialArray = ["apple", "banana", "cherry", "date"];\n  if (index < 0 || index >= initialArray.length) {\n    return "索引超出数组范围";\n  }\n  initialArray.splice(index, 1);\n  return initialArray;\n}\n\n// 调用示例（删除索引1的元素"banana"）\nconst removedArray = removeItem(1);\nconsole.log("删除元素后的数组：", removedArray);',

  '10-sumOfNumbers.js': '// 练习10：声明函数sumOfNumbers，接收数字n，返回0到n的所有数字之和\nfunction sumOfNumbers(n) {\n  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {\n    return "请输入非负整数";\n  }\n  let sum = 0;\n  for (let i = 0; i <= n; i++) {\n    sum += i;\n  }\n  return sum;\n}\n\n// 调用示例（计算0到10的和）\nconst totalSum = sumOfNumbers(10);\nconsole.log("0到10的数字之和：", totalSum);',

  '11-sumOfOdds.js': '// 练习11：声明函数sumOfOdds，接收数字n，返回0到n的所有奇数之和\nfunction sumOfOdds(n) {\n  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {\n    return "请输入非负整数";\n  }\n  let sum = 0;\n  for (let i = 0; i <= n; i++) {\n    if (i % 2 !== 0) sum += i;\n  }\n  return sum;\n}\n\n// 调用示例（计算0到10的奇数之和）\nconst oddSum = sumOfOdds(10);\nconsole.log("0到10的奇数之和：", oddSum);',

  '12-sumOfEven.js': '// 练习12：声明函数sumOfEven，接收数字n，返回0到n的所有偶数之和\nfunction sumOfEven(n) {\n  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {\n    return "请输入非负整数";\n  }\n  let sum = 0;\n  for (let i = 0; i <= n; i++) {\n    if (i % 2 === 0) sum += i;\n  }\n  return sum;\n}\n\n// 调用示例（计算0到10的偶数之和）\nconst evenSum = sumOfEven(10);\nconsole.log("0到10的偶数之和：", evenSum);',

  '13-evensAndOdds.js': '// 练习13：声明函数evensAndOdds，接收正整数n，统计0到n的偶数和奇数个数\nfunction evensAndOdds(n) {\n  if (typeof n !== "number" || n < 1 || !Number.isInteger(n)) {\n    console.log("请输入正整数");\n    return;\n  }\n  let evenCount = 0, oddCount = 0;\n  for (let i = 0; i <= n; i++) {\n    i % 2 === 0 ? evenCount++ : oddCount++;\n  }\n  console.log(`The number of odds are ${oddCount}.`);\n  console.log(`The number of evens are ${evenCount}.`);\n}\n\n// 调用示例（n=100）\nevensAndOdds(100);',

  '14-sum-any-arguments.js': '// 练习14：声明函数sum，接收任意数量的参数，返回总和\nfunction sum(...args) {\n  return args.filter(item => typeof item === "number").reduce((acc, cur) => acc + cur, 0);\n}\n\n// 调用示例\nconsole.log(sum(1, 2, 3));\nconsole.log(sum(1, 2, 3, 4));',

  '15-randomUserIp.js': '// 练习15：声明函数randomUserIp，生成随机IP地址（IPv4格式）\nfunction randomUserIp() {\n  const getRandomSegment = () => Math.floor(Math.random() * 256);\n  return `${getRandomSegment()}.${getRandomSegment()}.${getRandomSegment()}.${getRandomSegment()}`;\n}\n\n// 调用函数\nconst randomIp = randomUserIp();\nconsole.log("随机IP地址：", randomIp);',

  '16-randomMacAddress.js': '// 练习16：声明函数randomMacAddress，生成随机MAC地址（格式：XX:XX:XX:XX:XX:XX）\nfunction randomMacAddress() {\n  const chars = "0123456789ABCDEF";\n  let mac = "";\n  for (let i = 0; i < 6; i++) {\n    const group = `${chars[Math.floor(Math.random() * 16)]}${chars[Math.floor(Math.random() * 16)]}`;\n    mac += group + (i !== 5 ? ":" : "");\n  }\n  return mac;\n}\n\n// 调用函数\nconst randomMac = randomMacAddress();\nconsole.log("随机MAC地址：", randomMac);',

  '17-randomHexaNumberGenerator.js': '// 练习17：声明函数randomHexaNumberGenerator，生成随机十六进制颜色\nfunction randomHexaNumberGenerator() {\n  const chars = "0123456789abcdef";\n  let hexa = "#";\n  for (let i = 0; i < 6; i++) {\n    hexa += chars[Math.floor(Math.random() * 16)];\n  }\n  return hexa;\n}\n\n// 调用函数\nconst randomHex = randomHexaNumberGenerator();\nconsole.log("随机十六进制颜色：", randomHex);',

  '18-userIdGenerator.js': '// 练习18：声明函数userIdGenerator，生成7个字符的随机ID\nfunction userIdGenerator() {\n  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";\n  let userId = "";\n  for (let i = 0; i < 7; i++) {\n    userId += chars[Math.floor(Math.random() * chars.length)];\n  }\n  return userId;\n}\n\n// 调用函数\nconst userId = userIdGenerator();\nconsole.log("7字符随机ID：", userId);'
};

const level3Files = {
  '01-userIdGeneratedByUser.js': '// 练习1：声明函数userIdGeneratedByUser，通过prompt获取输入生成ID（浏览器环境运行）\nfunction userIdGeneratedByUser() {\n  const charCount = prompt("请输入每个ID的字符数量：");\n  const idCount = prompt("请输入需要生成的ID数量：");\n  const charNum = parseInt(charCount);\n  const idNum = parseInt(idCount);\n  if (isNaN(charNum) || isNaN(idNum) || charNum < 1 || idNum < 1) {\n    alert("请输入正整数！");\n    return;\n  }\n  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";\n  let ids = "";\n  for (let i = 0; i < idNum; i++) {\n    let id = "";\n    for (let j = 0; j < charNum; j++) {\n      id += chars[Math.floor(Math.random() * chars.length)];\n    }\n    ids += id + "\\n";\n  }\n  alert(`生成的${idNum}个ID：\\n${ids}`);\n  return ids;\n}\n\n// 调用函数（需在浏览器环境运行）\n// userIdGeneratedByUser();',

  '02-rgbColorGenerator.js': '// 练习2：声明函数rgbColorGenerator，生成随机RGB颜色\nfunction rgbColorGenerator() {\n  const getRandomValue = () => Math.floor(Math.random() * 256);\n  const r = getRandomValue();\n  const g = getRandomValue();\n  const b = getRandomValue();\n  return `rgb(${r},${g},${b})`;\n}\n\n// 调用函数\nconst randomRgb = rgbColorGenerator();\nconsole.log("随机RGB颜色：", randomRgb);',

  '03-arrayOfHexaColors.js': '// 练习3：声明函数arrayOfHexaColors，返回包含任意数量十六进制颜色的数组\nfunction arrayOfHexaColors(count = 1) {\n  if (typeof count !== "number" || count < 1 || !Number.isInteger(count)) {\n    return "请输入正整数作为颜色数量";\n  }\n  const chars = "0123456789abcdef";\n  const hexaColors = [];\n  for (let i = 0; i < count; i++) {\n    let hexa = "#";\n    for (let j = 0; j < 6; j++) {\n      hexa += chars[Math.floor(Math.random() * 16)];\n    }\n    hexaColors.push(hexa);\n  }\n  return hexaColors;\n}\n\n// 调用示例\nconsole.log(arrayOfHexaColors(3));\nconsole.log(arrayOfHexaColors(1));',

  '04-arrayOfRgbColors.js': '// 练习4：声明函数arrayOfRgbColors，返回包含任意数量RGB颜色的数组\nfunction arrayOfRgbColors(count = 1) {\n  if (typeof count !== "number" || count < 1 || !Number.isInteger(count)) {\n    return "请输入正整数作为颜色数量";\n  }\n  const getRandomValue = () => Math.floor(Math.random() * 256);\n  const rgbColors = [];\n  for (let i = 0; i < count; i++) {\n    rgbColors.push(`rgb(${getRandomValue()},${getRandomValue()},${getRandomValue()})`);\n  }\n  return rgbColors;\n}\n\n// 调用示例\nconsole.log(arrayOfRgbColors(3));\nconsole.log(arrayOfRgbColors(1));',

  '05-convertHexaToRgb.js': '// 练习5：声明函数convertHexaToRgb，将十六进制颜色转为RGB颜色\nfunction convertHexaToRgb(hexa) {\n  const hexaReg = /^#([0-9a-fA-F]{6})$/;\n  if (!hexaReg.test(hexa)) {\n    return "请输入合法的十六进制颜色（格式：#XXXXXX）";\n  }\n  const hexaStr = hexa.slice(1).toLowerCase();\n  const r = parseInt(hexaStr.slice(0, 2), 16);\n  const g = parseInt(hexaStr.slice(2, 4), 16);\n  const b = parseInt(hexaStr.slice(4, 6), 16);\n  return `rgb(${r},${g},${b})`;\n}\n\n// 调用示例\nconsole.log(convertHexaToRgb("#ee33df"));\nconsole.log(convertHexaToRgb("#00ff00"));',

  '06-convertRgbToHexa.js': '// 练习6：声明函数convertRgbToHexa，将RGB颜色转为十六进制颜色\nfunction convertRgbToHexa(rgb) {\n  const rgbReg = /^rgb\\((\\d{1,3}),(\d{1,3}),(\d{1,3})\\)$/;\n  const match = rgb.match(rgbReg);\n  if (!match) {\n    return "请输入合法的RGB颜色（格式：rgb(xxx,xxx,xxx)）";\n  }\n  const [, rStr, gStr, bStr] = match;\n  const r = parseInt(rStr);\n  const g = parseInt(gStr);\n  const b = parseInt(bStr);\n  if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {\n    return "RGB值必须在0-255之间";\n  }\n  const toHex = num => num.toString(16).padStart(2, "0").toUpperCase();\n  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;\n}\n\n// 调用示例\nconsole.log(convertRgbToHexa("rgb(238,51,223)"));\nconsole.log(convertRgbToHexa("rgb(0,255,0)"));',

  '07-generateColors.js': '// 练习7：声明函数generateColors，生成任意数量的十六进制或RGB颜色\nfunction generateColors(type, count = 1) {\n  if (!["hexa", "rgb"].includes(type)) {\n    return "颜色类型必须为\'hexa\'或\'rgb\'";\n  }\n  if (typeof count !== "number" || count < 1 || !Number.isInteger(count)) {\n    return "请输入正整数作为颜色数量";\n  }\n  const colors = [];\n  if (type === "hexa") {\n    const chars = "0123456789abcdef";\n    for (let i = 0; i < count; i++) {\n      let hexa = "#";\n      for (let j = 0; j < 6; j++) {\n        hexa += chars[Math.floor(Math.random() * 16)];\n      }\n      colors.push(hexa);\n    }\n  } else {\n    const getRandomValue = () => Math.floor(Math.random() * 256);\n    for (let i = 0; i < count; i++) {\n      colors.push(`rgb(${getRandomValue()},${getRandomValue()},${getRandomValue()})`);\n    }\n  }\n  return count === 1 ? colors[0] : colors;\n}\n\n// 调用示例\nconsole.log(generateColors("hexa", 3));\nconsole.log(generateColors("rgb", 1));',

  '08-shuffleArray.js': '// 练习8：声明函数shuffleArray，接收数组，返回打乱顺序的数组（Fisher-Yates算法）\nfunction shuffleArray(arr) {\n  if (!Array.isArray(arr)) {\n    return "请传入数组类型的参数";\n  }\n  const newArr = [...arr];\n  for (let i = newArr.length - 1; i > 0; i--) {\n    const randomIndex = Math.floor(Math.random() * (i + 1));\n    [newArr[i], newArr[randomIndex]] = [newArr[randomIndex], newArr[i]];\n  }\n  return newArr;\n}\n\n// 调用示例\nconst originalArr = [1, 2, 3, 4, 5];\nconst shuffledArr = shuffleArray(originalArr);\nconsole.log("原数组：", originalArr);\nconsole.log("打乱后数组：", shuffledArr);',

  '09-factorial.js': '// 练习9：声明函数factorial，接收非负整数n，返回n的阶乘\nfunction factorial(n) {\n  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {\n    return "请输入非负整数";\n  }\n  return n === 0 ? 1 : n * factorial(n - 1);\n}\n\n// 调用示例\nconsole.log(factorial(5));\nconsole.log(factorial(0));',

  '10-isEmpty.js': '// 练习10：声明函数isEmpty，接收参数，检查是否为空\nfunction isEmpty(value) {\n  if (value === null || value === undefined) return true;\n  if (typeof value === "string") return value.trim().length === 0;\n  if (Array.isArray(value)) return value.length === 0;\n  if (typeof value === "object") return Object.keys(value).length === 0;\n  return false;\n}\n\n// 调用示例\nconsole.log(isEmpty(null));\nconsole.log(isEmpty("   "));\nconsole.log(isEmpty([1, 2]));',

  '11-sum-any-args.js': '// 练习11：声明函数sum，接收任意数量的参数，返回总和\nfunction sum(...args) {\n  return args.filter(item => typeof item === "number").reduce((acc, cur) => acc + cur, 0);\n}\n\n// 调用示例\nconsole.log(sum(1, 2, 3, 4));\nconsole.log(sum(1, "a", 5));',

  '12-sumOfArrayItems.js': '// 练习12：声明函数sumOfArrayItems，接收数组，返回所有元素总和，检查元素是否均为数字\nfunction sumOfArrayItems(arr) {\n  if (!Array.isArray(arr)) {\n    return "请传入数组类型的参数";\n  }\n  const allNumbers = arr.every(item => typeof item === "number");\n  if (!allNumbers) {\n    return "数组中存在非数字元素，无法计算总和";\n  }\n  return arr.reduce((acc, cur) => acc + cur, 0);\n}\n\n// 调用示例\nconsole.log(sumOfArrayItems([1, 2, 3, 4]));\nconsole.log(sumOfArrayItems([1, "2", 3]));',

  '13-average.js': '// 练习13：声明函数average，接收数组，返回元素平均值，检查元素是否均为数字\nfunction average(arr) {\n  if (!Array.isArray(arr)) {\n    return "请传入数组类型的参数";\n  }\n  if (arr.length === 0) {\n    return "空数组无法计算平均值";\n  }\n  const allNumbers = arr.every(item => typeof item === "number");\n  if (!allNumbers) {\n    return "数组中存在非数字元素，无法计算平均值";\n  }\n  const sum = arr.reduce((acc, cur) => acc + cur, 0);\n  const avg = (sum / arr.length).toFixed(2);\n  return `数组平均值：${avg}`;\n}\n\n// 调用示例\nconsole.log(average([1, 2, 3, 4, 5]));\nconsole.log(average([10, 20, 30]));',

  '14-modifyArray.js': '// 练习14：声明函数modifyArray，接收数组，修改第五个元素为大写，长度<5返回"Not Found"\nfunction modifyArray(arr) {\n  if (!Array.isArray(arr)) {\n    return "请传入数组类型的参数";\n  }\n  if (arr.length < 5) {\n    return "Not Found";\n  }\n  const modifiedArr = [...arr];\n  modifiedArr[4] = typeof modifiedArr[4] === "string" ? modifiedArr[4].toUpperCase() : modifiedArr[4];\n  return modifiedArr;\n}\n\n// 调用示例\nconsole.log(modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"]));\nconsole.log(modifyArray(["Google", "Facebook", "Apple", "Amazon"]));',

  '15-isPrime.js': '// 练习15：声明函数isPrime，检查数字是否为质数\nfunction isPrime(num) {\n  if (typeof num !== "number" || num <= 1 || !Number.isInteger(num)) {\n    return `${num} 不是质数（质数必须是大于1的整数）`;\n  }\n  if (num === 2) return `${num} 是质数`;\n  if (num % 2 === 0) return `${num} 不是质数（能被2整除）`;\n  const sqrtNum = Math.sqrt(num);\n  for (let i = 3; i <= sqrtNum; i += 2) {\n    if (num % i === 0) return `${num} 不是质数（能被${i}整除）`;\n  }\n  return `${num} 是质数`;\n}\n\n// 调用示例\nconsole.log(isPrime(7));\nconsole.log(isPrime(12));\nconsole.log(isPrime(17));',

  '16-check-unique-array.js': '// 练习16：声明函数checkUniqueArray，检查数组所有元素是否唯一\nfunction checkUniqueArray(arr) {\n  if (!Array.isArray(arr)) {\n    return "请传入数组类型的参数";\n  }\n  const uniqueSet = new Set(arr);\n  return uniqueSet.size === arr.length ? "数组所有元素均唯一" : "数组中存在重复元素";\n}\n\n// 调用示例\nconsole.log(checkUniqueArray([1, 2, 3, 4]));\nconsole.log(checkUniqueArray([1, 2, 2, 3]));',

  '17-check-same-type.js': '// 练习17：声明函数checkSameType，检查数组所有元素是否为相同数据类型\nfunction checkSameType(arr) {\n  if (!Array.isArray(arr)) {\n    return "请传入数组类型的参数";\n  }\n  if (arr.length === 0) {\n    return "空数组，无元素类型可比较";\n  }\n  const firstType = typeof arr[0];\n  const allSameType = arr.every(item => typeof item === firstType);\n  return allSameType ? `数组所有元素均为 ${firstType} 类型` : `数组中存在多种数据类型（第一个元素为 ${firstType} 类型）`;\n}\n\n// 调用示例\nconsole.log(checkSameType([1, 2, 3]));\nconsole.log(checkSameType([1, "2", true]));',

  '18-isValidVariable.js': '// 练习18：声明函数isValidVariable，检查变量名是否合法\nfunction isValidVariable(varName) {\n  if (typeof varName !== "string") {\n    return "请传入字符串类型的变量名";\n  }\n  const validReg = /^[\\$\\_a-zA-Z][\\$\\_a-zA-Z0-9]*$/;\n  return validReg.test(varName) ? `${varName} 是合法的变量名` : `${varName} 是非法的变量名`;\n}\n\n// 调用示例\nconsole.log(isValidVariable("userName"));\nconsole.log(isValidVariable("123abc"));\nconsole.log(isValidVariable("$total"));',

  '19-sevenRandomNumbers.js': '// 练习19：声明函数sevenRandomNumbers，返回包含7个0-9唯一随机数的数组\nfunction sevenRandomNumbers() {\n  const randomArr = [];\n  while (randomArr.length < 7) {\n    const randomNum = Math.floor(Math.random() * 10);\n    if (!randomArr.includes(randomNum)) {\n      randomArr.push(randomNum);\n    }\n  }\n  return randomArr;\n}\n\n// 调用函数\nconst sevenRandoms = sevenRandomNumbers();\nconsole.log("7个0-9的唯一随机数：", sevenRandoms);',

  '20-reverseCountries.js': '// 练习20：声明函数reverseCountries，接收国家数组，复制后返回反转数组\nfunction reverseCountries(countries) {\n  if (!Array.isArray(countries)) {\n    return "请传入数组类型的参数";\n  }\n  return countries.slice().reverse();\n}\n\n// 调用示例\nconst countries = [\'Albania\', \'Bolivia\', \'Canada\', \'Denmark\'];\nconst reversedCountries = reverseCountries(countries);\nconsole.log("原数组：", countries);\nconsole.log("反转后数组：", reversedCountries);'
};

// -------------------------- 自动创建文件夹和文件 --------------------------
// 创建文件夹函数
function createFolder(folderPath) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log("已创建文件夹：" + folderPath);
  }
}

// 写入文件函数
function writeFiles(folderName, filesObj) {
  const folderPath = path.join(__dirname, folderName);
  createFolder(folderPath);
  
  const entries = Object.entries(filesObj);
  for (let i = 0; i < entries.length; i++) {
    const [fileName, content] = entries[i];
    const filePath = path.join(folderPath, fileName);
    fs.writeFileSync(filePath, content, "utf8");
    console.log("已生成文件：" + filePath);
  }
}

// 执行生成（Level 1/2/3）
writeFiles("Level 1", level1Files);
writeFiles("Level 2", level2Files);
writeFiles("Level 3", level3Files);

console.log("\\n✅ 所有文件生成完成！请在当前目录下查看 Level 1/2/3 文件夹。");