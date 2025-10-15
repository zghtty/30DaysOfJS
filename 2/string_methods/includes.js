// includes(): It takes a substring argument and it check if substring argument exists in the string. includes() returns a boolean. It checks if a substring exist in a string and it returns true if it exists and false if it doesn't exist.
// includes()：它接受一个子字符串参数，并检查该子字符串参数是否存在于字符串中。includes()返回一个布尔值。如果子字符串存在于字符串中，它返回true，否则返回false。
let string = '30 Days Of JavaScript'
console.log(string.includes('Days'))     // true
console.log(string.includes('days'))     // false
console.log(string.includes('Script'))     // true
console.log(string.includes('script'))     // false
console.log(string.includes('java'))     // false
console.log(string.includes('Java'))     // true

let country = 'Finland'
console.log(country.includes('fin')) // false
console.log(country.includes('Fin')) // true
console.log(country.includes('land')) // true
console.log(country.includes('Land')) // false