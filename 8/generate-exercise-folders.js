const fs = require('fs');
const path = require('path');

// -------------------------- 练习内容配置 --------------------------
// 一级练习内容（Level 1）
const level1Exercises = {
  '01-create-dog-object.js': `// 练习1：创建一个名为dog的空对象
const dog = {};

// 练习2：在控制台打印dog对象
console.log(dog);

// 练习3：为dog对象添加属性和方法
// name, legs, color, age 为属性
// bark 为方法（返回"woof woof"）
dog.name = "";
dog.legs = ;
dog.color = "";
dog.age = ;
dog.bark = function() {
  // 补充代码
};

// 练习4：从dog对象中获取属性值
console.log("名称：", dog.name);
console.log("腿的数量：", dog.legs);
console.log("颜色：", dog.color);
console.log("年龄：", dog.age);
console.log("吠叫：", dog.bark());

// 练习5：为dog对象添加新属性 breed 和 getDogInfo方法
dog.breed = "";
dog.getDogInfo = function() {
  // 补充代码（返回狗的信息字符串）
};
console.log(dog.getDogInfo());`
};

// 二级练习内容（Level 2）
const level2Exercises = {
  '01-find-most-skilled.js': `// 练习1：在users对象中找到拥有最多技能的人
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
};

// 补充代码：找到技能最多的人
let maxSkills = 0;
let mostSkilled = "";
// ...`,

  '02-count-users.js': `// 练习2：统计登录用户和积分≥50的用户数量
const users = {
  // （与上方users对象相同，省略重复代码）
  Alex: { email: 'alex@alex.com', skills: ['HTML', 'CSS', 'JavaScript'], age: 20, isLoggedIn: false, points: 30 },
  Asab: { email: 'asab@asab.com', skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'], age: 25, isLoggedIn: false, points: 50 },
  Brook: { email: 'daniel@daniel.com', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'], age: 30, isLoggedIn: true, points: 50 },
  Daniel: { email: 'daniel@alex.com', skills: ['HTML', 'CSS', 'JavaScript', 'Python'], age: 20, isLoggedIn: false, points: 40 },
  John: { email: 'john@john.com', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'], age: 20, isLoggedIn: true, points: 50 },
  Thomas: { email: 'thomas@thomas.com', skills: ['HTML', 'CSS', 'JavaScript', 'React'], age: 20, isLoggedIn: false, points: 40 },
  Paul: { email: 'paul@paul.com', skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'], age: 20, isLoggedIn: false, points: 40 }
};

// 补充代码：统计登录用户数量
let loggedInCount = 0;

// 补充代码：统计积分≥50的用户数量
let highPointsCount = 0;

console.log("登录用户数量：", loggedInCount);
console.log("积分≥50的用户数量：", highPointsCount);`,

  '03-find-mern-developers.js': `// 练习3：找到MERN栈开发人员（技能包含MongoDB, Express, React, Node）
const users = {
  // （与上方users对象相同，省略重复代码）
  Alex: { email: 'alex@alex.com', skills: ['HTML', 'CSS', 'JavaScript'], age: 20, isLoggedIn: false, points: 30 },
  Asab: { email: 'asab@asab.com', skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'], age: 25, isLoggedIn: false, points: 50 },
  Brook: { email: 'daniel@daniel.com', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'], age: 30, isLoggedIn: true, points: 50 },
  Daniel: { email: 'daniel@alex.com', skills: ['HTML', 'CSS', 'JavaScript', 'Python'], age: 20, isLoggedIn: false, points: 40 },
  John: { email: 'john@john.com', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'], age: 20, isLoggedIn: true, points: 50 },
  Thomas: { email: 'thomas@thomas.com', skills: ['HTML', 'CSS', 'JavaScript', 'React'], age: 20, isLoggedIn: false, points: 40 },
  Paul: { email: 'paul@paul.com', skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'], age: 20, isLoggedIn: false, points: 40 }
};

// 补充代码：筛选MERN开发人员
const mernSkills = ['MongoDB', 'Express', 'React', 'Node'];
const mernDevelopers = [];
// ...
console.log("MERN栈开发人员：", mernDevelopers);`,

  '04-add-user-without-modify.js': `// 练习4：在不修改原始users对象的情况下添加自己的信息
const users = {
  // （与上方users对象相同，省略重复代码）
  Alex: { email: 'alex@alex.com', skills: ['HTML', 'CSS', 'JavaScript'], age: 20, isLoggedIn: false, points: 30 },
  Asab: { email: 'asab@asab.com', skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'], age: 25, isLoggedIn: false, points: 50 },
  Brook: { email: 'daniel@daniel.com', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'], age: 30, isLoggedIn: true, points: 50 },
  Daniel: { email: 'daniel@alex.com', skills: ['HTML', 'CSS', 'JavaScript', 'Python'], age: 20, isLoggedIn: false, points: 40 },
  John: { email: 'john@john.com', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'], age: 20, isLoggedIn: true, points: 50 },
  Thomas: { email: 'thomas@thomas.com', skills: ['HTML', 'CSS', 'JavaScript', 'React'], age: 20, isLoggedIn: false, points: 40 },
  Paul: { email: 'paul@paul.com', skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'], age: 20, isLoggedIn: false, points: 40 }
};

// 补充代码：创建新对象并添加自己的信息
const updatedUsers = { ...users };
// ...
console.log("新用户是否添加成功：", 'MyName' in updatedUsers);`,

  '05-get-users-keys.js': `// 练习5：获取users对象的所有键
const users = {
  // （与上方users对象相同，省略重复代码）
  Alex: { email: 'alex@alex.com', skills: ['HTML', 'CSS', 'JavaScript'], age: 20, isLoggedIn: false, points: 30 },
  Asab: { email: 'asab@asab.com', skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'], age: 25, isLoggedIn: false, points: 50 },
  Brook: { email: 'daniel@daniel.com', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'], age: 30, isLoggedIn: true, points: 50 },
  Daniel: { email: 'daniel@alex.com', skills: ['HTML', 'CSS', 'JavaScript', 'Python'], age: 20, isLoggedIn: false, points: 40 },
  John: { email: 'john@john.com', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'], age: 20, isLoggedIn: true, points: 50 },
  Thomas: { email: 'thomas@thomas.com', skills: ['HTML', 'CSS', 'JavaScript', 'React'], age: 20, isLoggedIn: false, points: 40 },
  Paul: { email: 'paul@paul.com', skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'], age: 20, isLoggedIn: false, points: 40 }
};

// 补充代码：获取所有键
const userKeys = ;
console.log("users对象的所有键：", userKeys);`,

  '06-get-users-values.js': `// 练习6：获取users对象的所有值
const users = {
  // （与上方users对象相同，省略重复代码）
  Alex: { email: 'alex@alex.com', skills: ['HTML', 'CSS', 'JavaScript'], age: 20, isLoggedIn: false, points: 30 },
  Asab: { email: 'asab@asab.com', skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'], age: 25, isLoggedIn: false, points: 50 },
  Brook: { email: 'daniel@daniel.com', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'], age: 30, isLoggedIn: true, points: 50 },
  Daniel: { email: 'daniel@alex.com', skills: ['HTML', 'CSS', 'JavaScript', 'Python'], age: 20, isLoggedIn: false, points: 40 },
  John: { email: 'john@john.com', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'], age: 20, isLoggedIn: true, points: 50 },
  Thomas: { email: 'thomas@thomas.com', skills: ['HTML', 'CSS', 'JavaScript', 'React'], age: 20, isLoggedIn: false, points: 40 },
  Paul: { email: 'paul@paul.com', skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'], age: 20, isLoggedIn: false, points: 40 }
};

// 补充代码：获取所有值
const userValues = ;
console.log("users对象的所有值数量：", userValues.length);`,

  '07-print-countries-info.js': `// 练习7：使用国家对象打印名称、首都、人口和语言
// 示例国家对象
const countries = {
  China: {
    capital: "Beijing",
    population: 1412600000,
    languages: ["Chinese"]
  },
  USA: {
    capital: "Washington D.C.",
    population: 331900000,
    languages: ["English"]
  },
  Japan: {
    capital: "Tokyo",
    population: 125700000,
    languages: ["Japanese"]
  }
};

// 补充代码：循环打印国家信息
// ...`
};

// 三级练习内容（Level 3）
const level3Exercises = {
  '01-create-personAccount.js': `// 练习1：创建personAccount对象
const personAccount = {
  // 属性：firstName, lastName, incomes, expenses
  firstName: "",
  lastName: "",
  incomes: [
    // 示例：{ description: "Salary", amount: 5000 }
  ],
  expenses: [
    // 示例：{ description: "Rent", amount: 2000 }
  ],

  // 方法：计算总收入
  totalIncome: function() {
    // 补充代码
  },

  // 方法：计算总支出
  totalExpense: function() {
    // 补充代码
  },

  // 方法：返回账户信息
  accountInfo: function() {
    // 补充代码
  },

  // 方法：添加收入
  addIncome: function(description, amount) {
    // 补充代码
  },

  // 方法：添加支出
  addExpense: function(description, amount) {
    // 补充代码
  },

  // 方法：计算账户余额（收入-支出）
  accountBalance: function() {
    // 补充代码
  }
};

// 测试代码
personAccount.firstName = "Zhang";
personAccount.lastName = "San";
personAccount.addIncome("Salary", 8000);
personAccount.addExpense("Food", 1500);
console.log(personAccount.accountInfo());`,

  '02-user-auth-functions.js': `// 练习2：用户注册和登录功能
const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt:'08/01/2020 9:00 AM',
    isLoggedIn: false
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt:'08/01/2020 9:30 AM',
    isLoggedIn: true
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt:'08/01/2020 9:45 AM',
    isLoggedIn: true
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt:'08/01/2020 9:50 AM',
    isLoggedIn: false
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt:'08/01/2020 10:00 AM',
    isLoggedIn: false
  }
];

// a. 注册函数：添加用户，若已存在则提示
function signUp(user, usersArray) {
  // 补充代码
}

// b. 登录函数：验证邮箱和密码，成功则更新登录状态
function signIn(email, password, usersArray) {
  // 补充代码
}

// 测试代码
console.log(signUp({ username: "NewUser", email: "new@test.com", password: "newpass" }, users));
console.log(signIn("alex@alex.com", "123123", users));
console.log(users.find(u => u.email === "alex@alex.com").isLoggedIn);`,

  '03-product-rating-functions.js': `// 练习3：产品评分功能
const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
];

// a. 产品评分函数：添加或更新评分
function rateProduct(productId, userId, rate, productsArray) {
  // 补充代码
}

// b. 平均评分函数：计算产品的平均评分
function averageRating(productId, productsArray) {
  // 补充代码
}

// 测试代码
rateProduct('eedfcf', 'ab12ex', 4, products); // 给手机添加评分
console.log("手机的评分：", products[0].ratings);
console.log("手机的平均评分：", averageRating('eedfcf', products));`,

  '04-product-like-function.js': `// 练习4：产品点赞/取消点赞功能
const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
];

// 点赞/取消点赞函数
function likeProduct(productId, userId, productsArray) {
  // 补充代码
}

// 测试代码
likeProduct('aegfal', 'zwf8md', products); // 给电脑点赞
console.log("电脑的点赞列表：", products[1].likes);
likeProduct('aegfal', 'fg12cy', products); // 取消电脑的点赞
console.log("电脑的点赞列表：", products[1].likes);`
};

// -------------------------- 生成文件夹和文件的核心函数 --------------------------
function createExerciseFolders() {
  // 创建三级文件夹
  const levels = [
    { name: 'Level 1', exercises: level1Exercises },
    { name: 'Level 2', exercises: level2Exercises },
    { name: 'Level 3', exercises: level3Exercises }
  ];

  levels.forEach(level => {
    // 创建一级文件夹（如Level 1）
    const levelPath = path.join(__dirname, level.name);
    if (!fs.existsSync(levelPath)) {
      fs.mkdirSync(levelPath);
      console.log(`✅ 已创建文件夹：${level.name}`);
    }

    // 生成该级别的所有练习文件
    Object.entries(level.exercises).forEach(([fileName, content]) => {
      const filePath = path.join(levelPath, fileName);
      fs.writeFileSync(filePath, content, 'utf8');
    });
    console.log(`  └─ 已生成 ${Object.keys(level.exercises).length} 个练习文件`);
  });

  console.log("\n🎉 所有练习文件夹和文件生成完成！");
  console.log(`生成路径：${path.resolve(__dirname)}`);
}

// 执行生成函数
createExerciseFolders();