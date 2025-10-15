// startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
// string.startsWith(substring)
// startsWith：它接受一个子字符串作为参数，检查该字符串是否以指定的子字符串开头。返回一个布尔值（true 或 false）。
let string = 'Love is the best to in this world'
console.log(string.startsWith('Love')) // true
console.log(string.startsWith('love')) // false
console.log(string.startsWith('world')) // false

let country = 'Finland'
console.log(country.startsWith('Fin')) // true
console.log(country.startsWith('fin')) // false
console.log(country.startsWith('land')) //  false
