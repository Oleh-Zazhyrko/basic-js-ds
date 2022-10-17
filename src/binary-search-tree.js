const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
	constructor() {
		this.rootNode = null;
	}

	root() {
		return this.rootNode;
	}

	add(data) {
		let newNode = new Node(data);

		if (!this.rootNode) {
			this.rootNode = newNode;
			return;
		}

		const searchTree = (node) => {
			if (data < node.data) {
				if (!node.left) {
					node.left = newNode;
				} else {
					searchTree(node.left);
				}
			} else if (data > node.data) {
				if (!node.right) {
					node.right = newNode;
				} else {
					searchTree(node.right);
				}
			}
		};
		searchTree(this.rootNode);
	}

	has(data) {
		// return !!this.find(data);
		return Boolean(this.find(data));
		// return this.find(data) !== null;

		// remove line with error and write your code here
	}

	find(data) {
		return findNode(this.rootNode, data);

		function findNode(node, data) {
			if (!node) {
				return null;
			}

			if (node.data === data) {
				return node;
			}

			return data < node.data
				? findNode(node.left, data)
				: findNode(node.right, data);
		}
		// remove line with error and write your code here
	}

	remove(data) {
		this.rootNode = removeNode(this.rootNode, data);

		function removeNode(node, data) {
			if (!node) {
				return null;
			}

			if (data < node.data) {
				node.left = removeNode(node.left, data);
				return node;
			} else if (data > node.data) {
				node.right = removeNode(node.right, data);
				return node;
			} else {
				if (!node.left && !node.right) {
					return null;
				}
				if (!node.left) {
					node = node.right;
					return node;
				}
				if (!node.right) {
					node = node.left;
					return node;
				}

				let minFromRight = node.right;
				while (minFromRight.left) {
					minFromRight = minFromRight.left;
				}
				node.data = minFromRight.data;

				node.right = removeNode(node.right, minFromRight.data);

				return node;
			}
		}
		// remove line with error and write your code here
	}

	min() {
		if (!this.rootNode) {
			return;
		}

		let node = this.rootNode;
		while (node.left) {
			node = node.left;
		}

		return node.data;

		// remove line with error and write your code here
	}

	max() {
		if (!this.rootNode) {
			return;
		}

		let node = this.rootNode;
		while (node.right) {
			node = node.right;
		}

		return node.data;
		// remove line with error and write your code here
	}
}

module.exports = {
	BinarySearchTree,
};

// const tree = new BinarySearchTree();

// tree.add(1);
// tree.add(6);
// tree.add(5);
// console.log(tree);
