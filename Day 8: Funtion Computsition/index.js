// Day 8: Function Compusition

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        let result = x;
        for(let i = functions.length - 1 ; i >= 0; i--){
            result = functions[i](result)
        }
        return result;
    }
};