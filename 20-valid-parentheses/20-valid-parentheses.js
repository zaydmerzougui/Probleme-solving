/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(str) {

  class Stack {
    constructor() {
      this.items = [];
      this.count = 0;
    }
    // add element to top of stack
    push(ele) {
      this.items[this.count] = ele;
      // console.log(this.items[this.count], this.count);
      this.count++;
    }

    pop() {
      if (this.count == 0) {
        return undefined;
      }
      let deletedItem = this.items[this.count - 1];
      this.items.length = this.count - 1;
      this.count--;

      return deletedItem;
    }
    peek() {
      return this.items[this.items.length - 1];
    }
  }
  let stack = new Stack();
  let map = new Map([
    ["{", "}"],
    ["(", ")"],
    ["[", "]"],
  ]);

  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      stack.push(str[i]);
    } else if (map.get(stack.peek()) === str[i]) {
      stack.pop();
    } 
      else {
        return false;
      }
  }
  
  return !stack.items.length;


    
};