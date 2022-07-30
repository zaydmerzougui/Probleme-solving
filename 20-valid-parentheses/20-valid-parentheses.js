/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
let map=new Map([
    ['(',')'],
    ['{' , '}'],
    ['[' , ']']
])
let stack=[]
for(let i = 0;i<s.length;i++){
    if(map.has(s[i])){stack.push(s[i])}
    else if(map.get(stack[stack.length-1])==s[i]) {
        stack.pop()
    }else{
        return false
    }
}
    return !stack.length

    
};