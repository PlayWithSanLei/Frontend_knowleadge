/*
* 扫描器类
*/

export default class Scanner {
    constructor(tempStr) {
        // 将模板字符串写到实例身上
        this.tempStr = tempStr;
        // console.log(tempStr)
        // 指针
        this.pos = 0;
        // 尾巴，一开始就是模板字符串原文
        this.tail = tempStr;
    }

    // 功能弱，就是走过指定内容，没有返回值
    scan() {

    }

    // 让指针进行扫描，直到遇见指定内容结束，并且能够返回结束之前路过的文字
    scanUntil(stopTag) {
        while (this.tail.indexOf(stopTag) !== 0 /*说明没有扫描到stopTag*/) {
            this.pos++;
            // 改变尾巴为从当前指针这个字符开始到最后的全部字符
            this.tail = this.tempStr.substr(this.pos)
        }
    }
}
