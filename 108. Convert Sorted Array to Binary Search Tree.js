class TreeNode{
    constructor(val,left=null,right=null){
        this.val=val;
        this.left=left;
        this.right=right;
    }
}

const sortedArrayToBST=(nums)=>{
    if(nums.length===0){
        return null;
    }

    const midIndex=Math.floor(nums.length/2);
    const root=new TreeNode(nums[midIndex]);

    const leftSubtree=nums.slice(0,midIndex);
    const rightSubtree=nums.slice(midIndex+1);

    root.left=sortedArrayToBST(leftSubtree);
    root.right=sortedArrayToBST(rightSubtree);

    return root;
}