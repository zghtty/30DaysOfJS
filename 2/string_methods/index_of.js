// indexOf(): Takes takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
// indexOf()：接收一个子字符串，如果该子字符串存在于某个字符串中，则返回该子字符串的首个位置；如果不存在，则返回-1。
string.indexOf(substring)
let string = '30 Days Of JavaScript'
console.log(string.indexOf('D'))          // 3
console.log(string.indexOf('Days'))       // 3
console.log(string.indexOf('days'))       // -1
console.log(string.indexOf('a'))          // 4
console.log(string.indexOf('JavaScript')) // 11
console.log(string.indexOf('Script'))     //15
console.log(string.indexOf('script'))     // -1
