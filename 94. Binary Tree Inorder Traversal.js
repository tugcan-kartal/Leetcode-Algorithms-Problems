inorderTraversal=(root)=>{
    const values=[];
              
    function traverse(node){
        if(node===null){
            return;
        }

        traverse(node.left);
        values.push(node.val);
        traverse(node.right);
    }

    traverse(root);
    return values;
}