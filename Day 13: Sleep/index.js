// Day 13: Sleep

/**
 * @param {number} millis
 * @return {Promise}
 */

async function sleep(millis) {
    return new Promise((res) => {
        setTimeout(() => {
            res(millis)
        }, millis)
    })
}


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */