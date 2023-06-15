// Find the sum of all left leaves in given binary tree
// 3
// ||
// 9 20
//      ||
//     15 7
// There are two left leaves in the binary tree, with values 9 and 15 respectively

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }
  
  function sumOfLeftLeaves(root) {
    if (root === null) {
      return 0;
    }
  
    let sum = 0;
  
    if (root.left !== null && root.left.left === null && root.left.right === null) {
      sum += root.left.val;
    }
  
    sum += sumOfLeftLeaves(root.left);
    sum += sumOfLeftLeaves(root.right);
  
    return sum;
  }
  
  const root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);
  
  const result = sumOfLeftLeaves(root);
  console.log("Sum of all left leaves:", result);
  