// charCodeAt(): Takes index and it returns char code(ASCII number) of the value at that index
// charCodeAt()：接收索引并返回该索引处值的字符编码（ASCII 数字）
string.charCodeAt(index)
let string = '30 Days Of JavaScript'
console.log(string.charCodeAt(3)) // D ASCII number is 51
let lastIndex = string.length - 1
console.log(string.charCodeAt(lastIndex)) // t ASCII is 116
