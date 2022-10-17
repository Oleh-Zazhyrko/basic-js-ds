const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
	constructor() {
		this.arr = new Array();		
		// this.top = 0;
	}


	/*push(element) {
		// throw new NotImplementedError("Not implemented");

		this.top = element;
		this.arr[this.size] = element;
		this.size++;

		// remove line with error and write your code here
	}

	pop() {
		// throw new NotImplementedError("Not implemented");
		this.size--;
		this.top = this.arr[this.size];
		this.arr = this.arr.slice(0, -1);		
		return this.arr.slice(-1);
		// remove line with error and write your code here
	}*/

	push(element) {
		// this.top = element;
		this.arr[this.arr.length] = element;


		// remove line with error and write your code here
	}

	pop() {					
		let popEl = this.arr[this.arr.length - 1];
		this.arr = this.arr.slice(0, -1);		
		return popEl;
		// remove line with error and write your code here
	}

	peek() {		
		return 	this.arr[this.arr.length - 1];
		// remove line with error and write your code here
	}
}

module.exports = {
	Stack,
};
