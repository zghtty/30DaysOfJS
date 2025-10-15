// match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.
// 它接受子字符串或正则表达式模式作为参数，如果存在匹配项，则返回一个数组；如果没有匹配项，则返回 null。让我们看看正则表达式模式是什么样的。它以 / 符号开头，以 / 符号结尾。
// let string = 'love'
// let patternOne = /love/ // with out any flag
// let patternTwo = /love/gi // g-means to search in the whole text, i - case insensitive
// string.match(substring)
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love')) //
/*
output

["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]
*/
let pattern = /love/gi
console.log(string.match(pattern)) // ["love", "love", "love"]
// Let us extract numbers from text using regular expression. This is not regular expression section, no panic.

let txt = 'In 2019, I run 30 Days of Python. Now, in 2020 I super exited to start this challenge'
let regEx = /\d/g // d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers, 
// if there is g after that it means global, search everywhere.
console.log(txt.match(regEx)) // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]
