class TreeNode{
  constructor(val=null,left=null,right=null){
      this.val=val;
      this.left=left;
      this.right=right;
  }
}

const isSymmetric=(root)=>{
  if(!root) return true;
  return isMirror(root.left,root.right)
}

const isMirror=(node1,node2)=>{
  if(!node1 && !node2) return true;
  if(!node1 || !node2 || node1.val !== node2.val) return false;
  return isMirror(node1.left,node2.right) && isMirror(node1.right,node2.left);
}
