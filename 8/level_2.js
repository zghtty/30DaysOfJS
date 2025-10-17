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

// 1. 找到拥有最多技能的人
let maxSkills = 0;
let mostSkilledPerson = "";
for (const person in users) {
  if (users[person].skills.length > maxSkills) {
    maxSkills = users[person].skills.length;
    mostSkilledPerson = person;
  }
}
console.log("\nLevel 2 - 技能最多的人:", mostSkilledPerson, "，技能数:", maxSkills);

// 2. 统计登录用户和积分≥50的用户数量
let loggedInCount = 0;
let highPointsCount = 0;
for (const person in users) {
  if (users[person].isLoggedIn) loggedInCount++;
  if (users[person].points >= 50) highPointsCount++;
}
console.log("Level 2 - 登录用户数量:", loggedInCount);
console.log("Level 2 - 积分≥50的用户数量:", highPointsCount);

// 3. 找到MERN栈开发人员（MongoDB, Express, React, Node）
const mernSkills = ['MongoDB', 'Express', 'React', 'Node'];
const mernDevelopers = [];
for (const person in users) {
  const hasAllSkills = mernSkills.every(skill => users[person].skills.includes(skill));
  if (hasAllSkills) mernDevelopers.push(person);
}
console.log("Level 2 - MERN栈开发人员:", mernDevelopers);

// 4. 在不修改原始对象的情况下添加自己的信息
const updatedUsers = { ...users };
updatedUsers["MyName"] = {
  email: 'my@email.com',
  skills: ['HTML', 'CSS', 'JavaScript'],
  age: 28,
  isLoggedIn: true,
  points: 100
};
console.log("Level 2 - 添加新用户后是否包含原始用户:", 'Alex' in updatedUsers);
console.log("Level 2 - 是否包含新用户:", 'MyName' in updatedUsers);

// 5. 获取users对象的所有键
const userKeys = Object.keys(users);
console.log("Level 2 - 用户对象的所有键:", userKeys);

// 6. 获取users对象的所有值
const userValues = Object.values(users);
console.log("Level 2 - 用户对象的所有值数量:", userValues.length);

// 7. 使用国家对象打印信息（以示例国家对象为例）
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
  }
};
console.log("\nLevel 2 - 国家信息:");
for (const country in countries) {
  const info = countries[country];
  console.log(`${country}: 首都是${info.capital}，人口${info.population}，官方语言${info.languages.join(',')}`);
}