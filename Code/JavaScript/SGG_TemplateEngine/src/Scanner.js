/*
* 扫描器类
*/

export default class Scanner {
    constructor(tempStr) {
        // 将模板字符串写到实例身上
        this.tempStr = tempStr;
        // 指针
        this.pos = 0;
        // 尾巴，一开始就是模板字符串原文
        this.tail = tempStr;
    }

    // 功能弱，就是走过指定内容，没有返回值
    scan(tag) {
        if (this.tail.indexOf(tag) === 0) {
            // tag有多长，就让指针后移多少位
            this.pos += tag.length;
            // 尾巴也要变
            this.tail = this.tempStr.substring(this.pos);
        }
    }

    // 让指针进行扫描，直到遇见指定内容结束，并且能够返回结束之前路过的文字
    scanUntil(stopTag) {
        // 记录一下执行本方法的时候pos的值
        const pos_backup = this.pos;
        while (!this.eos() && this.tail.indexOf(stopTag) !== 0 /*说明没有扫描到stopTag*/) {
            this.pos++;
            // 改变尾巴为从当前指针这个字符开始到最后的全部字符
            this.tail = this.tempStr.substr(this.pos)
        }

        return this.tempStr.substring(pos_backup, this.pos);
    }

    eos() {
        return this.pos >= this.tempStr.length;
    }
}
