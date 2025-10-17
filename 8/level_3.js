// 1. 创建personAccount对象
const personAccount = {
  firstName: "Zhang",
  lastName: "San",
  incomes: [
    { description: "Salary", amount: 5000 },
    { description: "Bonus", amount: 1000 }
  ],
  expenses: [
    { description: "Rent", amount: 2000 },
    { description: "Food", amount: 800 }
  ],
  
  // 计算总收入
  totalIncome: function() {
    return this.incomes.reduce((total, item) => total + item.amount, 0);
  },
  
  // 计算总支出
  totalExpense: function() {
    return this.expenses.reduce((total, item) => total + item.amount, 0);
  },
  
  // 账户信息
  accountInfo: function() {
    return `${this.firstName} ${this.lastName}的账户信息：
    总收入：${this.totalIncome()}
    总支出：${this.totalExpense()}
    余额：${this.accountBalance()}`;
  },
  
  // 添加收入
  addIncome: function(description, amount) {
    this.incomes.push({ description, amount });
  },
  
  // 添加支出
  addExpense: function(description, amount) {
    this.expenses.push({ description, amount });
  },
  
  // 计算账户余额
  accountBalance: function() {
    return this.totalIncome() - this.totalExpense();
  }
};

console.log("\nLevel 3 - personAccount信息:");
personAccount.addIncome("Part-time", 800); // 添加兼职收入
personAccount.addExpense("Transport", 300); // 添加交通支出
console.log(personAccount.accountInfo());


// 用户和产品数据
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

// 2a. 注册函数
function signUp(user, usersArray) {
  // 检查用户是否已存在（通过邮箱）
  const exists = usersArray.some(u => u.email === user.email);
  if (exists) {
    return "该用户已存在，请直接登录";
  }
  // 添加新用户
  usersArray.push({
    ...user,
    _id: 'new_' + Math.random().toString(36).substr(2, 6), // 生成随机ID
    createdAt: new Date().toLocaleString(),
    isLoggedIn: false
  });
  return "注册成功！";
}

// 测试注册功能
console.log("\nLevel 3 - 注册新用户:", signUp({
  username: "NewUser",
  email: "new@user.com",
  password: "newpass"
}, users));
console.log("注册后用户总数:", users.length);
console.log("重复注册:", signUp({
  username: "Alex",
  email: "alex@alex.com", // 已存在的邮箱
  password: "123"
}, users));

// 2b. 登录函数
function signIn(email, password, usersArray) {
  const user = usersArray.find(u => u.email === email && u.password === password);
  if (!user) {
    return "邮箱或密码错误";
  }
  user.isLoggedIn = true;
  return "登录成功！";
}

// 测试登录功能
console.log("\nLevel 3 - 登录测试:", signIn("alex@alex.com", "123123", users));
console.log("Alex的登录状态:", users.find(u => u.email === "alex@alex.com").isLoggedIn);

// 3a. 产品评分函数
function rateProduct(productId, userId, rate, productsArray) {
  const product = productsArray.find(p => p._id === productId);
  if (!product) return "产品不存在";
  
  // 检查是否已评分，已评分则更新
  const existingRating = product.ratings.find(r => r.userId === userId);
  if (existingRating) {
    existingRating.rate = rate;
  } else {
    product.ratings.push({ userId, rate });
  }
  return "评分成功";
}

// 测试评分功能
console.log("\nLevel 3 - 产品评分:", rateProduct('eedfcf', 'ab12ex', 4, products));
console.log("手机的评分列表:", products[0].ratings);

// 3b. 计算产品平均评分
function averageRating(productId, productsArray) {
  const product = productsArray.find(p => p._id === productId);
  if (!product) return "产品不存在";
  if (product.ratings.length === 0) return "暂无评分";
  
  const total = product.ratings.reduce((sum, r) => sum + r.rate, 0);
  return total / product.ratings.length;
}

// 测试平均评分
console.log("手机的平均评分:", averageRating('eedfcf', products).toFixed(1));

// 4. 产品点赞/取消点赞函数
function likeProduct(productId, userId, productsArray) {
  const product = productsArray.find(p => p._id === productId);
  if (!product) return "产品不存在";
  
  const likeIndex = product.likes.indexOf(userId);
  if (likeIndex === -1) {
    // 未点赞，添加点赞
    product.likes.push(userId);
    return "点赞成功";
  } else {
    // 已点赞，取消点赞
    product.likes.splice(likeIndex, 1);
    return "取消点赞成功";
  }
}

// 测试点赞功能
console.log("\nLevel 3 - 点赞测试:", likeProduct('aegfal', 'zwf8md', products));
console.log("电脑的点赞列表:", products[1].likes);
console.log("取消点赞:", likeProduct('aegfal', 'fg12cy', products));
console.log("电脑的点赞列表:", products[1].likes);