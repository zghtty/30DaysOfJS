// lastIndexOf(): Takes takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1
// lastIndexOf()：接收一个子字符串，如果该子字符串存在于某个字符串中，返回该子字符串最后出现的位置；如果不存在，则返回-1。
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.lastIndexOf('love'))       // 67
console.log(string.lastIndexOf('you'))        // 63
console.log(string.lastIndexOf('JavaScript')) // 38
