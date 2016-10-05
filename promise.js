'use strict';

module.exports.testPromise1 = function () {
    function msgAfterTimeout (msg, who, timeout) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let message = `|${msg}-Hello-${who}|`;
                console.log(message);
                resolve(message);
            }, timeout)
        })
    }

    msgAfterTimeout("Haf", "Foo", 1000).then((msg) =>
        msgAfterTimeout(msg, "Bar", 2000)
    ).then((msg) => {
        console.log(`done after 3000ms:${msg}`)
    })
};
