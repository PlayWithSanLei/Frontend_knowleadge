/*
* 函数的功能是折叠tokens，将#/之间的tokens能够整合起来，作为它下标为3的项
*/
export default function nestTokens(tokens) {
    // 结果数组
    var nestedTokens = [];
    // 栈结构，存放小tokens
    var sections = [];
    for (let token of tokens) {
        switch (token[0]) {
            case '#':
                token[2] = []
                sections.push(token);
                nestedTokens.push(token)
                break;
            case '/':
                let section_pop = sections.pop();
                nestedTokens.push(section_pop)
                break;
            default:
                if (sections.length === 0) {
                    nestedTokens.push(token)
                } else {
                    sections[sections.length - 1][2].push(token)
                }
        }
    }
    return nestedTokens;
}
