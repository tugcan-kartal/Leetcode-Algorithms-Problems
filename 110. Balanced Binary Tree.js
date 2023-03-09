var isBalanced=function(root){
    if(!root){
        return true;
    }

    function getHeight(node){
        if (!node) {
            return 0;
        }

        const left_height=getHeight(node.left);
        const right_height=getHeight(node.right);

        return Math.max(left_height,right_height)+1;
    }

    function getBalance(node){
        if (!node) {
            return 0;
        }

        const left_height=getHeight(node.left);
        const right_height=getHeight(node.right);

        return Math.abs(left_height-right_height);
    }

    if(getBalance(root)>1){
        return false;
    }

    return isBalanced(root.left) && isBalanced(root.right);
}