var preorderTraversal = function(root) {
    const result=[];
    traverse(root);
    return result;

    function traverse(node){
        if(!node){
            return;
        }

        result.push(node.val);
        traverse(node.left);
        traverse(node.right);
    }
};