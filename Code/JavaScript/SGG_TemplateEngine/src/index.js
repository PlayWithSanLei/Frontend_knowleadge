// 只考虑在浏览器环境中
import parseTemplateToTokens from './parseTemplateToTokens'

window.SGG_TemplateEngine = {
    // 渲染方法
    render(tempStr, data) {
        // 调用parseTemplateToTokens函数，让模板字符串能够会变为tokens数组
        var tokens = parseTemplateToTokens(tempStr);
        console.log(tokens);
    }
}
