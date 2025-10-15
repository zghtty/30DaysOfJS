// 1. 根据分数判断等级
function getGrade(score) {
    if (score >= 80 && score <= 100) {
        return 'A';
    } else if (score >= 70 && score <= 79) {
        return 'B';
    } else if (score >= 60 && score <= 69) {
        return 'C';
    } else if (score >= 50 && score <= 59) {
        return 'D';
    } else if (score >= 0 && score <= 49) {
        return 'F';
    } else {
        return '无效分数';
    }
}

// 2. 判断季节
function getSeason(month) {
    const monthLower = month.toLowerCase();
    const autumn = ['september', 'october', 'november'];
    const winter = ['december', 'january', 'february'];
    const spring = ['march', 'april', 'may'];
    const summer = ['june', 'july', 'august'];
    
    if (autumn.includes(monthLower)) return '秋季';
    if (winter.includes(monthLower)) return '冬季';
    if (spring.includes(monthLower)) return '春季';
    if (summer.includes(monthLower)) return '夏季';
    return '无效月份';
}

// 3. 判断工作日/周末
function checkWeekday(day) {
    const dayLower = day.toLowerCase();
    const dayCapitalized = dayLower.charAt(0).toUpperCase() + dayLower.slice(1);
    
    if (dayLower === 'saturday' || dayLower === 'sunday') {
        return `${dayCapitalized} is a weekend.`;
    } else if (['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].includes(dayLower)) {
        return `${dayCapitalized} is a working day.`;
    } else {
        return '无效的星期';
    }
}

// 4. 显示月份天数（不考虑闰年）
function getDaysInMonth(month) {
    const monthLower = month.toLowerCase();
    const monthCapitalized = monthLower.charAt(0).toUpperCase() + monthLower.slice(1);
    const months31 = ['january', 'march', 'may', 'july', 'august', 'october', 'december'];
    const months30 = ['april', 'june', 'september', 'november'];
    
    if (months31.includes(monthLower)) return `${monthCapitalized} has 31 days.`;
    if (months30.includes(monthLower)) return `${monthCapitalized} has 30 days.`;
    if (monthLower === 'february') return `${monthCapitalized} has 28 days.`;
    return '无效月份';
}

// 5. 判断闰年
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// 6. 显示月份天数（考虑闰年）
function getDaysInMonthWithLeapYear(month, year) {
    const monthLower = month.toLowerCase();
    const monthCapitalized = monthLower.charAt(0).toUpperCase() + monthLower.slice(1);
    const months31 = ['january', 'march', 'may', 'july', 'august', 'october', 'december'];
    const months30 = ['april', 'june', 'september', 'november'];
    
    if (months31.includes(monthLower)) return `${monthCapitalized} ${year} has 31 days.`;
    if (months30.includes(monthLower)) return `${monthCapitalized} ${year} has 30 days.`;
    if (monthLower === 'february') {
        return isLeapYear(year) 
            ? `${monthCapitalized} ${year} has 29 days (leap year).`
            : `${monthCapitalized} ${year} has 28 days.`;
    }
    return '无效月份';
}

// 测试代码
console.log('分数评级:');
console.log('85分:', getGrade(85)); // A
console.log('72分:', getGrade(72)); // B
console.log('59分:', getGrade(59)); // D

console.log('\n季节判断:');
console.log('十月:', getSeason('October')); // 秋季
console.log('二月:', getSeason('FEBRUARY')); // 冬季

console.log('\n工作日/周末判断:');
console.log(checkWeekday('saturDaY')); // Saturday is a weekend.
console.log(checkWeekday('FrIDAy')); // Friday is a working day.

console.log('\n月份天数:');
console.log(getDaysInMonth('JANUARY')); // January has 31 days.
console.log(getDaysInMonth('FEbruary')); // February has 28 days.

console.log('\n考虑闰年的月份天数:');
console.log(getDaysInMonthWithLeapYear('February', 2020)); // 29天
console.log(getDaysInMonthWithLeapYear('February', 2021)); // 28天