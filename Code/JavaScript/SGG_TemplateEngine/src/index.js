// 只考虑在浏览器环境中
import Scanner from "./Scanner";

window.SGG_TemplateEngine = {
    // 渲染方法
    render(tempStr, data) {
        // console.log('render函数被调用，命令scanner工作');
        // 实例化一个扫描器，构造的时候提供一个参数，这个参数就是模板字符串
        // 也就是说这个扫描器就是针对这个模板字符串工作的
        var scanner = new Scanner(tempStr);
        scanner.scanUntil('{{')
        console.log(scanner.pos)
    }
}
