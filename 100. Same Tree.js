const isSameTree=(p,q)=>{
    if(!p && !q){
        return true;
    }
    if(!p || !q){       //in here just one of them succeed 
        return false
    }
    if(p.val!==q.val){
        return false;
    }
    return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
}