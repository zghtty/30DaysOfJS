// endsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
// string.endsWith(substring)
// endsWith：它接受一个子字符串作为参数，检查该字符串是否以指定的子字符串结尾。它返回一个布尔值（true 或 false）。
let string = 'Love is the best to in this world'
console.log(string.endsWith('world')) // true
console.log(string.endsWith('love')) // false
console.log(string.endsWith('in this world')) // true

let country = 'Finland'
console.log(country.endsWith('land')) // true
console.log(country.endsWith('fin')) // false
console.log(country.endsWith('Fin')) //  false
