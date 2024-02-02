// Day 5: Apply Transform Over Each Element in Array

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var map = function(arr, fn) {
    let result = []
    for(let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], Number(i)))
    }
    return result

};