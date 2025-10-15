// Level 1 练习
// 1. 声明变量并赋值
let challenge = '30 Days Of JavaScript';

// 2. 打印字符串
console.log(challenge);

// 3. 打印字符串长度
console.log(challenge.length);

// 4. 转换为大写
console.log(challenge.toUpperCase());

// 5. 转换为小写
console.log(challenge.toLowerCase());

// 6. 截取第一个单词
console.log(challenge.substring(0, 2)); // 使用substring
// 或 console.log(challenge.substr(0, 2)); // 使用substr

// 7. 截取"Days Of JavaScript"
console.log(challenge.substring(3)); // 使用substring
// 或 console.log(challenge.substr(3)); // 使用substr

// 8. 检查是否包含"Script"
console.log(challenge.includes('Script'));

// 9. 拆分为数组
console.log(challenge.split());

// 10. 按空格分割
console.log(challenge.split(' '));

// 11. 按逗号分割公司字符串
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', '));

// 12. 替换为Python
console.log(challenge.replace('JavaScript', 'Python'));

// 13. 获取索引15处的字符
console.log(challenge.charAt(15));

// 14. 获取J的字符编码
console.log(challenge.charCodeAt(11)); // J在索引11处

// 15. 查找a首次出现的位置
console.log(challenge.indexOf('a'));

// 16. 查找a最后出现的位置
console.log(challenge.lastIndexOf('a'));

// 17. 查找because首次出现的位置
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

// 18. 查找because最后出现的位置
console.log(sentence.lastIndexOf('because'));

// 19. 使用search查找because首次出现的位置
console.log(sentence.search('because'));

// 20. 使用trim()移除空白
let strWithSpaces = ' 30 Days Of JavaScript ';
console.log(strWithSpaces.trim());

// 21. 使用startsWith()方法返回true
console.log(challenge.startsWith('30'));

// 22. 使用endsWith()方法返回true
console.log(challenge.endsWith('Script'));

// 23. 使用match()找出所有a
console.log(challenge.match(/a/g));

// 24. 使用concat()合并字符串
let part1 = '30 Days Of';
let part2 = 'JavaScript';
console.log(part1.concat(' ', part2));

// 25. 使用repeat()打印2次
console.log(challenge.repeat(2));


// Level 2 练习
// 1. 打印名言
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 2. 打印特蕾莎修女的名言
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");

// 3. 检查'10'与10的类型是否相等
console.log(typeof '10' === typeof 10); // false
// 使其相等
console.log(typeof parseInt('10') === typeof 10); // true

// 4. 检查parseFloat('9.8')是否等于10
console.log(parseFloat('9.8') === 10); // false
// 使其等于10
console.log(Math.ceil(parseFloat('9.8')) === 10); // true

// 5. 检查"on"是否同时出现在python和jargon中
let word1 = 'python';
let word2 = 'jargon';
console.log(word1.includes('on') && word2.includes('on'));

// 6. 检查句子中是否有jargon
let sentence2 = 'I hope this course is not full of jargon.';
console.log(sentence2.includes('jargon'));

// 7. 生成0到100之间的随机数
console.log(Math.floor(Math.random() * 101));

// 8. 生成50到100之间的随机数
console.log(Math.floor(Math.random() * 51) + 50);

// 9. 生成0到255之间的随机数
console.log(Math.floor(Math.random() * 256));

// 10. 使用随机数访问"JavaScript"的字符
let jsStr = 'JavaScript';
let randomIndex = Math.floor(Math.random() * jsStr.length);
console.log(jsStr[randomIndex]);

// 11. 打印图案
console.log('1 1 1 1 1');
console.log('2 1 2 4 8');
console.log('3 1 3 9 27');
console.log('4 1 4 16 64');
console.log('5 1 5 25 125');

// 12. 截取短语because because because
let longSentence = 'You cannot end a sentence with because because because is a conjunction';
let startIndex = longSentence.indexOf('because');
let endIndex = startIndex + 'because because because'.length;
console.log(longSentence.substr(startIndex, endIndex - startIndex));


// Level 3 练习
// 1. 计算love出现的次数
let loveSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let loveCount = loveSentence.match(/love/gi).length;
console.log('love出现的次数:', loveCount);

// 2. 计算because出现的次数
let becauseSentence = 'You cannot end a sentence with because because because is a conjunction';
let becauseCount = becauseSentence.match(/because/g).length;
console.log('because出现的次数:', becauseCount);

// 3. 清理文本并找出最常见的单词
const messySentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

// 清理文本：移除特殊字符
let cleanText = messySentence.replace(/[^a-zA-Z\s]/g, '').toLowerCase();
// 拆分为单词数组
let words = cleanText.split(/\s+/).filter(word => word);
// 统计单词频率
let wordFrequency = {};
words.forEach(word => {
    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
});
// 找出最常见的单词
let mostFrequentWord = Object.entries(wordFrequency).sort((a, b) => b[1] - a[1])[0];
console.log('最常见的单词:', mostFrequentWord);

// 4. 计算年度总收入
let incomeText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
// 提取所有数字
let numbers = incomeText.match(/\d+/g).map(Number);
// 计算年度收入：月薪*12 + 年度奖金 + 在线课程月收入*12
let annualIncome = numbers[0] * 12 + numbers[1] + numbers[2] * 12;
console.log('年度总收入:', annualIncome, 'euro');