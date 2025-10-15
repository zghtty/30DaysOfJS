// split(): The split method splits a string at a specified place.
// split()：split方法在指定位置拆分字符串。


let string = '30 Days Of JavaScript' // 定义字符串变量string，值为"30 Days Of JavaScript"

console.log(string.split())     // 输出：["30 Days Of JavaScript"] -> 将字符串转换为数组（无分隔符时，数组仅含原字符串一个元素）
console.log(string.split(' '))  // 输出：["30", "Days", "Of", "JavaScript"] -> 按空格分割字符串，转换为数组

let firstName = 'Asabeneh' // 定义字符串变量firstName，值为"Asabeneh"

console.log(firstName.split())    // 输出：["Asabeneh"] -> 将字符串转换为数组（无分隔符时，数组仅含原字符串一个元素）
console.log(firstName.split(''))  // 输出：["A", "s", "a", "b", "e", "n", "e", "h"] -> 按空字符串分割（即每个字符拆分），转换为数组

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland' // 定义字符串变量countries，值为包含多个国家的字符串

console.log(countries.split(','))  // 输出：["Finland", " Sweden", " Norway", " Denmark", " and Iceland"] -> 按英文逗号分割字符串，转换为数组（分割后部分元素前含空格）
console.log(countries.split(', ')) // 输出：["Finland", "Sweden", "Norway", "Denmark", "and Iceland"] -> 按“逗号+空格”分割字符串，转换为数组（元素格式更整洁）