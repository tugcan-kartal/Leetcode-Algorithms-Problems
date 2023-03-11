function TreeNode(val,left,right){
    this.val=(val===undefined ? 0: val);
    this.left=(left===undefined ? null: left);
    this.right=(right===undefined ? null : right);
}

function hasPathSum(root,targetSum){
    if(!root){
        return false
    }

    if(!root.left && !root.right && root.val ===targetSum){
        return true;
    }

    if(hasPathSum(root.left,targetSum-root.val)){
        return true;
    }

    if(hasPathSum(root.right,targetSum-root.val)){
        return true;
    }

    return false;


}