/*
*
css 中经常有类似 background-image 这种通过 - 连接的字符，通过 javascript 设置样式的时候需要将这种样式转换成 backgroundImage 驼峰格式，请完成此转换功能。
输入：-webkit-background-image
输出：webkitBackgroundImage
* */
var str = "background-color"
let res = ''

for (let i = 0; i < str.length; i++) {
    if (str[i] === '-' && i !== 0) {
        res += str[i+1].toUpperCase()
        i++
        continue
    }
    res += str[i]
}
if(res[0] === '-') {
    res = res.slice(1)
}
console.log(res);
