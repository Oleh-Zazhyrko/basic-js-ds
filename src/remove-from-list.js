const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(l, k) {
	if (l === null) {
		return l;
	}

	while (l.value === k) {
		l = l.next;
	}

	let current = l;
	let nextNode = current.next;

	while (nextNode !== null) {
		if (nextNode.value === k) {
			current.next = nextNode.next;

			if (current.next === null) break;
		}

		removeKFromList(nextNode, k);

		current = current.next;
		nextNode = nextNode.next;
	}

	return l;

	// remove line with error and write your code here
}

module.exports = {
	removeKFromList,
};
let l = {
	value: 3,
	next: {
		value: 1,
		next: {
			value: 2,
			next: {
				value: 3,
				next: {
					value: 3,
					next: {
						value: 4,
						next: { value: 5, next: null },
					},
				},
			},
		},
	},
};
let m = {
	value: 3,
	next: {
		value: 1,
		next: {
			value: 2,
			next: {
				value: 3,
				next: {
					value: 4,
					next: { value: 5, next: null },
				},
			},
		},
	},
};

let k = 3;

console.log(removeKFromList(l, k));
console.log(removeKFromList(m, k));
