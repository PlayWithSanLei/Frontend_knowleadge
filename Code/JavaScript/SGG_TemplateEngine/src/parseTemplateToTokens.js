import Scanner from "./Scanner";
import nestTokens from "./nestTokens";

/*
* 将模板字符串变为tokens数组
* */

export default function parseTemplateToTokens(tempStr) {
    var tokens = [];
    // 创建扫描器
    var scanner = new Scanner(tempStr);
    var words;
    // 让扫描器工作
    while (!scanner.eos()) {
        // 收集开始标记出现之前的文字
        words = scanner.scanUntil('{{');
        if (words !== '') {
            tokens.push(['text', words]);
        }
        scanner.scan('{{');
        words = scanner.scanUntil('}}');
        if (words !== '') {
            // 这个words就是大括号中间的东西
            if (words[0] === '#') {
                tokens.push(['#', words.substring(1)])
            }
            else if (words[0] === '/') {
                tokens.push(['/', words.substring(1)])
            } else {
                tokens.push(['name', words]);
            }
        }
        scanner.scan('}}');
    }
    return nestTokens(tokens);
}
