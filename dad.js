const { type } = require("os");

function Dad() {
    
    this.reg_hungry = new RegExp("I['|´]M (.{1,})","i");

    this.test_msg = (msg) => {
        let res = msg.match(this.reg_hungry);
        if(res) {
            return "Hi " + res[1] + " i'm dad.";
        } else if(msg.toUpperCase() == "HAHA") {
            return "GG\nWas funn tho :)"
        }

    }
}


module.exports = new Dad();