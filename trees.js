/** TreeNode: node for a general tree. */

class TreeNode {
    constructor(value, children = []) {
      this.value = value;
      this.children = children;
    }
  }
  
  class Tree {
    constructor(root = null) {
      this.root = root;
    }
  
    /** sumValues(): add up all of the values in the tree. */
  
    sumValues() {
      let nodesToVisit = [this.root];
      let totalSum = 0;
  
      while (nodesToVisit.length) {
        let currentNode = nodesToVisit.pop();
        totalSum += currentNode.value;
  
        for (let childNode of currentNode.children) {
          nodesToVisit.push(childNode);
        }
      }
      return totalSum;
    }
  
    /** countEvens(): count all of the nodes in the tree with even values. */
  
    countEvens() {
      let nodesToVisit = [this.root];
      let evenCount = 0;
  
      while (nodesToVisit.length) {
        let currentNode = nodesToVisit.pop();
        if (currentNode.value % 2 === 0) {
          evenCount++;
        }
  
        for (let childNode of currentNode.children) {
          nodesToVisit.push(childNode);
        }
      }
      return evenCount;
    }
  
    /** numGreater(lowerBound): return a count of the number of nodes
     * whose value is greater than lowerBound. */
  
    numGreater(lowerBound) {
      let nodesToVisit = [this.root];
      let greaterCount = 0;
  
      while (nodesToVisit.length) {
        let currentNode = nodesToVisit.pop();
        if (currentNode.value > lowerBound) {
          greaterCount++;
        }
  
        for (let childNode of currentNode.children) {
          nodesToVisit.push(childNode);
        }
      }
  
      return greaterCount;
    }
  }
  
  module.exports = { Tree, TreeNode };
  