const { type } = require("os");

class Dad {

    constructor() {
        this.reg_hungry = new RegExp("I['|´]M (.{1,})");
    }

    static test_msg(msg) {
        msg = msg.toUpperCase()
        let res = msg.match(this.reg_hungry);
        if(res.length == 2) {
            return res[1];
        } else {
            return null;
        }
    }
}

