const fs = require('fs');
const path = require('path');

// -------------------------- Level 1 文件内容 --------------------------
const level1Files = {
  '01-iterate-0-to-10.js': '// 练习1：使用for、while、do while循环迭代0到10\nconsole.log("=== 使用for循环迭代0到10 ===");\nfor (let i = 0; i <= 10; i++) {\n  console.log(i);\n}\n\nconsole.log("\\n=== 使用while循环迭代0到10 ===");\nlet whileI = 0;\nwhile (whileI <= 10) {\n  console.log(whileI);\n  whileI++;\n}\n\nconsole.log("\\n=== 使用do while循环迭代0到10 ===");\nlet doWhileI = 0;\ndo {\n  console.log(doWhileI);\n  doWhileI++;\n} while (doWhileI <= 10);',

  '02-iterate-10-to-0.js': '// 练习2：使用for、while、do while循环从10迭代到0\nconsole.log("=== 使用for循环从10迭代到0 ===");\nfor (let i = 10; i >= 0; i--) {\n  console.log(i);\n}\n\nconsole.log("\\n=== 使用while循环从10迭代到0 ===");\nlet whileI = 10;\nwhile (whileI >= 0) {\n  console.log(whileI);\n  whileI--;\n}\n\nconsole.log("\\n=== 使用do while循环从10迭代到0 ===");\nlet doWhileI = 10;\ndo {\n  console.log(doWhileI);\n  doWhileI--;\n} while (doWhileI >= 0);',

  '03-iterate-0-to-n.js': '// 练习3：使用for循环从0迭代到n（n可自定义）\nfunction iterateToN(n) {\n  console.log("=== 从0迭代到" + n + " ===");\n  for (let i = 0; i <= n; i++) {\n    console.log(i);\n  }\n}\n\n// 示例调用：迭代0到5\niterateToN(5);\n// 如需迭代到其他数字，修改括号内参数即可，如 iterateToN(15);',

  '04-print-hash-pattern.js': '// 练习4：打印#金字塔图案\nconsole.log("=== #金字塔图案 ===");\n// 循环7次，每次打印i个#（i从1到7）\nfor (let i = 1; i <= 7; i++) {\n  console.log("#".repeat(i));\n}',

  '05-print-square-multiplication.js': '// 练习5：打印0到10的平方乘法表\nconsole.log("=== 0到10平方乘法表 ===");\nfor (let i = 0; i <= 10; i++) {\n  const square = i * i;\n  console.log(i + " x " + i + " = " + square);\n}',

  '06-print-i-i2-i3-table.js': '// 练习6：打印i、i²、i³表格（对齐格式）\nconsole.log("=== i、i²、i³表格 ===");\n// 表头\nconsole.log(" i    i^2   i^3");\n// 循环0到10，计算并格式化输出\nfor (let i = 0; i <= 10; i++) {\n  const i2 = i ** 2;\n  const i3 = i ** 3;\n  // 使用padStart补空格，确保格式对齐\n  console.log(i.toString().padStart(2) + "    " + i2.toString().padStart(3) + "     " + i3.toString().padStart(3));\n}',

  '07-print-even-numbers.js': '// 练习7：打印0到100的所有偶数\nconsole.log("=== 0到100的偶数 ===");\nfor (let i = 0; i <= 100; i++) {\n  // 偶数判断：能被2整除\n  if (i % 2 === 0) {\n    console.log(i);\n  }\n}',

  '08-print-odd-numbers.js': '// 练习8：打印0到100的所有奇数\nconsole.log("=== 0到100的奇数 ===");\nfor (let i = 0; i <= 100; i++) {\n  // 奇数判断：不能被2整除\n  if (i % 2 !== 0) {\n    console.log(i);\n  }\n}',

  '09-print-prime-numbers.js': '// 练习9：打印0到100的所有质数\nconsole.log("=== 0到100的质数 ===");\n// 质数定义：大于1的自然数，除了1和自身外无法被其他数整除\nfor (let i = 2; i <= 100; i++) {\n  let isPrime = true; // 标记是否为质数\n  // 检查i是否能被2到i-1之间的数整除\n  for (let j = 2; j < i; j++) {\n    if (i % j === 0) {\n      isPrime = false;\n      break; // 一旦能整除，直接退出内层循环\n    }\n  }\n  if (isPrime) {\n    console.log(i);\n  }\n}',

  '10-calculate-sum-0-to-100.js': '// 练习10：计算0到100所有数字的总和\nlet totalSum = 0;\n// 循环累加0到100的所有数字\nfor (let i = 0; i <= 100; i++) {\n  totalSum += i;\n}\n// 输出结果（预期结果：5050）\nconsole.log("The sum of all numbers from 0 to 100 is " + totalSum + ".");',

  '11-calculate-even-odd-sum.js': '// 练习11：计算0到100的偶数和与奇数和\nlet evenSum = 0; // 偶数总和\nlet oddSum = 0;  // 奇数总和\n\nfor (let i = 0; i <= 100; i++) {\n  if (i % 2 === 0) {\n    evenSum += i;\n  } else {\n    oddSum += i;\n  }\n}\n\n// 输出结果（预期：偶数和2550，奇数和2500）\nconsole.log("The sum of all evens from 0 to 100 is " + evenSum + ". And the sum of all odds from 0 to 100 is " + oddSum + ".");',

  '12-even-odd-sum-array.js': '// 练习12：以数组形式输出0到100的偶数和与奇数和\nlet evenSum = 0;\nlet oddSum = 0;\n\nfor (let i = 0; i <= 100; i++) {\n  if (i % 2 === 0) {\n    evenSum += i;\n  } else {\n    oddSum += i;\n  }\n}\n\n// 数组格式：[偶数和, 奇数和]（预期：[2550, 2500]）\nconst sumArray = [evenSum, oddSum];\nconsole.log(sumArray);',

  '13-generate-5-randoms.js': '// 练习13：生成包含5个随机数的数组（随机数范围：0~1）\nconst randomNumbers = [];\n// 循环5次，每次添加一个随机数\nfor (let i = 0; i < 5; i++) {\n  randomNumbers.push(Math.random());\n}\n\nconsole.log("=== 5个随机数的数组 ===");\nconsole.log(randomNumbers);',

  '14-generate-5-unique-randoms.js': '// 练习14：生成包含5个唯一随机数的数组（随机数范围：0~99）\nconst uniqueRandoms = [];\n\n// 循环直到数组长度达到5\nwhile (uniqueRandoms.length < 5) {\n  // 生成0~99的整数随机数\n  const randomNum = Math.floor(Math.random() * 100);\n  // 检查是否已存在，不存在则添加\n  if (!uniqueRandoms.includes(randomNum)) {\n    uniqueRandoms.push(randomNum);\n  }\n}\n\nconsole.log("=== 5个唯一随机数的数组 ===");\nconsole.log(uniqueRandoms);',

  '15-generate-6char-random-id.js': '// 练习15：生成6个字符的随机ID（包含小写字母和数字）\n// 定义ID可用字符集\nconst charSet = "abcdefghijklmnopqrstuvwxyz0123456789";\nlet randomId = "";\n\n// 循环6次，每次从字符集随机选一个字符\nfor (let i = 0; i < 6; i++) {\n  // 生成0~字符集长度-1的随机索引\n  const randomIndex = Math.floor(Math.random() * charSet.length);\n  randomId += charSet[randomIndex];\n}\n\nconsole.log("=== 6个字符的随机ID ===");\nconsole.log(randomId); // 示例输出：5j2khz'
};

// -------------------------- Level 2 文件内容 --------------------------
const level2Files = {
  '01-generate-custom-length-id.js': '// 练习1：生成任意长度的随机ID（参数：length，指定ID长度）\nfunction generateRandomId(length) {\n  const charSet = "abcdefghijklmnopqrstuvwxyz0123456789";\n  let randomId = "";\n  \n  for (let i = 0; i < length; i++) {\n    const randomIndex = Math.floor(Math.random() * charSet.length);\n    randomId += charSet[randomIndex];\n  }\n  \n  return randomId;\n}\n\n// 示例调用：生成12位和20位ID\nconsole.log("=== 12位随机ID ===");\nconsole.log(generateRandomId(12)); // 示例：fe3jo1gl124g\nconsole.log("\\n=== 20位随机ID ===");\nconsole.log(generateRandomId(20)); // 示例：xkqci4utda1lmbelpkm03rba',

  '02-generate-random-hex.js': '// 练习2：生成随机十六进制颜色（格式：#xxxxxx）\n// 十六进制字符集（0-9, a-f）\nconst hexCharSet = "0123456789abcdef";\nlet hexColor = "#"; // 十六进制颜色以#开头\n\n// 循环6次，生成6个十六进制字符\nfor (let i = 0; i < 6; i++) {\n  const randomIndex = Math.floor(Math.random() * hexCharSet.length);\n  hexColor += hexCharSet[randomIndex];\n}\n\nconsole.log("=== 随机十六进制颜色 ===");\nconsole.log(hexColor); // 示例：#ee33df',

  '03-generate-random-rgb.js': '// 练习3：生成随机RGB颜色（格式：rgb(r,g,b)，r/g/b范围0~255）\nfunction getRandomRgb() {\n  // 生成0~255的随机整数（RGB每个通道范围）\n  const red = Math.floor(Math.random() * 256);\n  const green = Math.floor(Math.random() * 256);\n  const blue = Math.floor(Math.random() * 256);\n  \n  return "rgb(" + red + "," + green + "," + blue + ")";\n}\n\nconsole.log("=== 随机RGB颜色 ===");\nconsole.log(getRandomRgb()); // 示例：rgb(240,180,80)',

  '04-countries-to-uppercase.js': '// 练习4：将countries数组转换为全大写数组\n// 原始数组\nconst countries = [\n  "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",\n  "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"\n];\n\n// 使用map方法转换为全大写\nconst upperCountries = countries.map(function(country) {\n  return country.toUpperCase();\n});\n\nconsole.log("=== 全大写国家数组 ===");\nconsole.log(upperCountries);\n// 预期输出：["ALBANIA", "BOLIVIA", "CANADA", ..., "KENYA"]',

  '05-countries-length-array.js': '// 练习5：创建countries数组中每个国家名称长度的数组\nconst countries = [\n  "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",\n  "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"\n];\n\n// 使用map方法获取每个国家的长度\nconst countryLengths = countries.map(function(country) {\n  return country.length;\n});\n\nconsole.log("=== 国家名称长度数组 ===");\nconsole.log(countryLengths);\n// 预期输出：[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]',

  '06-countries-info-array.js': '// 练习6：创建国家信息数组（格式：[国家名, 3位缩写, 名称长度]）\nconst countries = [\n  "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",\n  "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"\n];\n\n// 处理每个国家，生成信息数组\nconst countryInfoArray = countries.map(function(country) {\n  return [\n    country,                  // 国家名\n    country.slice(0, 3).toUpperCase(), // 3位大写缩写\n    country.length            // 名称长度\n  ];\n});\n\nconsole.log("=== 国家信息数组 ===");\nconsole.log(countryInfoArray);\n// 预期输出：[["Albania", "ALB", 7], ["Bolivia", "BOL", 7], ...]',

  '07-find-countries-with-land.js': '// 练习7：查找包含"land"的国家，无则提示\nconst countries = [\n  "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",\n  "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"\n];\n\n// 筛选包含"land"的国家（不区分大小写，此处原文为小写land）\nconst landCountries = countries.filter(function(country) {\n  return country.includes("land");\n});\n\n// 判断结果并输出\nif (landCountries.length > 0) {\n  console.log("=== 包含\'land\'的国家 ===");\n  console.log(landCountries); // 预期：["Finland","Ireland"]\n} else {\n  console.log("所有这些国家都不含land");\n}',

  '08-find-countries-end-with-ia.js': '// 练习8：查找以"ia"结尾的国家，无则提示\nconst countries = [\n  "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",\n  "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"\n];\n\n// 筛选以"ia"结尾的国家\nconst iaCountries = countries.filter(function(country) {\n  return country.endsWith("ia");\n});\n\n// 判断结果并输出\nif (iaCountries.length > 0) {\n  console.log("=== 以\'ia\'结尾的国家 ===");\n  console.log(iaCountries); // 预期：["Albania", "Bolivia","Ethiopia"]\n} else {\n  console.log("These are countries ends without ia");\n}',

  '09-find-longest-country.js': '// 练习9：查找名称字符数最多的国家\nconst countries = [\n  "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",\n  "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"\n];\n\nlet longestCountry = ""; // 存储最长名称的国家\n\n// 遍历数组，比较名称长度\nfor (let i = 0; i < countries.length; i++) {\n  const country = countries[i];\n  if (country.length > longestCountry.length) {\n    longestCountry = country;\n  }\n}\n\nconsole.log("=== 名称最长的国家 ===");\nconsole.log(longestCountry); // 预期：Ethiopia（8个字符）',

  '10-find-5char-countries.js': '// 练习10：查找名称长度为5的国家\nconst countries = [\n  "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",\n  "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"\n];\n\n// 筛选长度为5的国家\nconst fiveCharCountries = countries.filter(function(country) {\n  return country.length === 5;\n});\n\nconsole.log("=== 名称长度为5的国家 ===");\nconsole.log(fiveCharCountries); // 预期：["Japan", "Kenya"]',

  '11-find-longest-webtech.js': '// 练习11：查找webTechs数组中最长的单词\nconst webTechs = [\n  "HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"\n];\n\nlet longestTech = ""; // 存储最长的技术单词\n\n// 遍历数组，比较长度\nfor (let i = 0; i < webTechs.length; i++) {\n  const tech = webTechs[i];\n  if (tech.length > longestTech.length) {\n    longestTech = tech;\n  }\n}\n\nconsole.log("=== webTechs中最长的单词 ===");\nconsole.log(longestTech); // 预期：JavaScript（10个字符）',

  '12-webtechs-info-array.js': '// 练习12：创建webTechs信息数组（格式：[技术名, 名称长度]）\nconst webTechs = [\n  "HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"\n];\n\n// 生成信息数组\nconst webTechInfo = webTechs.map(function(tech) {\n  return [tech, tech.length];\n});\n\nconsole.log("=== webTechs信息数组 ===");\nconsole.log(webTechInfo);\n// 预期输出：[["HTML", 4], ["CSS", 3], ["JavaScript", 10], ...]',

  '13-create-mern-acronym.js': '// 练习13：从mernStack数组创建"MERN"缩写\nconst mernStack = ["MongoDB", "Express", "React", "Node"];\n\n// 取每个元素的首字母，转换为大写并拼接\nconst mernAcronym = mernStack\n  .map(function(tech) {\n    return tech[0].toUpperCase();\n  }) // 取首字母并大写\n  .join(""); // 拼接成字符串\n\nconsole.log("=== MERN缩写 ===");\nconsole.log(mernAcronym); // 预期：MERN',

  '14-iterate-tech-array.js': '// 练习14：遍历技术数组并打印元素\nconst techArray = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];\n\nconsole.log("=== 技术数组元素 ===");\n// 使用for循环遍历（替换for of，兼容性更好）\nfor (let i = 0; i < techArray.length; i++) {\n  console.log(techArray[i]);\n}',

  '15-reverse-fruits-array.js': '// 练习15：反转水果数组（不使用reverse方法）\nconst fruits = ["banana", "orange", "mango", "lemon"];\nconst reversedFruits = []; // 存储反转后的数组\n\n// 从原数组最后一个元素遍历到第一个\nfor (let i = fruits.length - 1; i >= 0; i--) {\n  reversedFruits.push(fruits[i]);\n}\n\nconsole.log("=== 原始水果数组 ===");\nconsole.log(fruits);\nconsole.log("\\n=== 反转后的水果数组 ===");\nconsole.log(reversedFruits); // 预期：["lemon", "mango", "orange", "banana"]',

  '16-print-fullstack-elements.js': '// 练习16：打印fullStack数组的所有元素（转为大写）\nconst fullStack = [\n  ["HTML", "CSS", "JS", "React"],\n  ["Node", "Express", "MongoDB"]\n];\n\nconsole.log("=== fullStack数组元素（大写） ===");\n// 双层for循环：先遍历外层数组，再遍历内层数组\nfor (let i = 0; i < fullStack.length; i++) {\n  const stackLayer = fullStack[i];\n  for (let j = 0; j < stackLayer.length; j++) {\n    console.log(stackLayer[j].toUpperCase());\n  }\n}\n\n// 预期输出：\n// HTML\n// CSS\n// JS\n// REACT\n// NODE\n// EXPRESS\n// MONGODB'
};

// -------------------------- Level 3 文件内容 --------------------------
const level3Files = {
  '01-copy-countries-array.js': '// 练习1：复制countries数组（避免修改原始数组）\nconst countries = [\n  "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",\n  "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"\n];\n\n// 方法1：使用扩展运算符（推荐，简洁）\nconst countriesCopy1 = [...countries];\n// 方法2：使用slice方法（无参数时复制整个数组）\nconst countriesCopy2 = countries.slice();\n\n// 验证：修改副本不会影响原始数组\ncountriesCopy1.push("France");\nconsole.log("=== 原始countries数组 ===");\nconsole.log(countries); // 无France\nconsole.log("\\n=== 扩展运算符复制的副本（含France） ===");\nconsole.log(countriesCopy1);\nconsole.log("\\n=== slice复制的副本（无France） ===");\nconsole.log(countriesCopy2);',

  '02-sort-copied-countries.js': '// 练习2：复制并排序countries数组（不修改原始数组）\nconst countries = [\n  "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",\n  "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"\n];\n\n// 先复制数组，再排序（sort默认按字母顺序）\nconst sortedCountries = [...countries].sort();\n\nconsole.log("=== 原始countries数组 ===");\nconsole.log(countries);\nconsole.log("\\n=== 排序后的countries数组 ===");\nconsole.log(sortedCountries);\n// 预期排序结果：Albania, Bolivia, Canada, Denmark, Ethiopia, Finland, Germany, Hungary, Ireland, Japan, Kenya',

  '03-sort-webtechs-mern.js': '// 练习3：排序webTechs和mernStack数组\nconst webTechs = [\n  "HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"\n];\nconst mernStack = ["MongoDB", "Express", "React", "Node"];\n\n// 复制并排序（避免修改原始数组）\nconst sortedWebTechs = [...webTechs].sort();\nconst sortedMernStack = [...mernStack].sort();\n\nconsole.log("=== 排序后的webTechs ===");\nconsole.log(sortedWebTechs);\nconsole.log("\\n=== 排序后的mernStack ===");\nconsole.log(sortedMernStack);\n// webTechs预期：CSS, HTML, JavaScript, MongoDB, Node, React, Redux\n// mernStack预期：Express, MongoDB, Node, React',

  '04-extract-land-countries.js': '// 练习4：提取包含"land"的国家并打印\nconst countries = [\n  "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",\n  "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"\n];\n\n// 筛选包含"land"的国家\nconst landCountries = countries.filter(function(country) {\n  return country.includes("land");\n});\n\nconsole.log("=== 包含\'land\'的国家 ===");\nconsole.log(landCountries); // 预期：["Finland","Ireland"]',

  '05-find-max-length-country.js': '// 练习5：查找名称字符数最多的国家（同Level2练习9，Level3重复考察）\nconst countries = [\n  "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",\n  "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"\n];\n\nlet maxLength = 0;\nlet longestCountry = "";\n\n// 遍历数组，记录最大长度和对应国家\nfor (let i = 0; i < countries.length; i++) {\n  const country = countries[i];\n  if (country.length > maxLength) {\n    maxLength = country.length;\n    longestCountry = country;\n  }\n}\n\nconsole.log("=== 名称字符数最多的国家 ===");\nconsole.log("国家：" + longestCountry + "，字符数：" + maxLength); // 预期：Ethiopia，8个字符',

  '06-extract-4char-countries.js': '// 练习6：提取名称长度为4的国家\nconst countries = [\n  "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",\n  "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"\n];\n\n// 筛选长度为4的国家\nconst fourCharCountries = countries.filter(function(country) {\n  return country.length === 4;\n});\n\nconsole.log("=== 名称长度为4的国家 ===");\nconsole.log(fourCharCountries); // 预期：空数组（原始数组中无4字符国家）',

  '07-extract-multiword-countries.js': '// 练习7：提取包含两个或更多单词的国家\nconst countries = [\n  "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",\n  "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"\n];\n\n// 筛选包含空格的国家（多单词名称含空格）\nconst multiWordCountries = countries.filter(function(country) {\n  return country.includes(" ");\n});\n\nconsole.log("=== 包含两个或更多单词的国家 ===");\nconsole.log(multiWordCountries); // 预期：空数组（原始数组均为单单词国家）\n// 若需测试，可手动添加多单词国家，如 countries.push("United States"); 则会被筛选出',

  '08-reverse-upper-countries.js': '// 练习8：反转国家数组并将每个国家名称大写\nconst countries = [\n  "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",\n  "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"\n];\n\n// 步骤：1.复制数组 2.反转 3.每个元素大写\nconst reversedUpperCountries = [...countries]\n  .reverse()\n  .map(function(country) {\n    return country.toUpperCase();\n  });\n\nconsole.log("=== 原始countries数组 ===");\nconsole.log(countries);\nconsole.log("\\n=== 反转并大写后的国家数组 ===");\nconsole.log(reversedUpperCountries);\n// 预期输出：["KENYA", "JAPAN", "IRELAND", ..., "ALBANIA"]'
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