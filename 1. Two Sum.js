var twoSum=(nums,target)=>{
    for(let x=0;x<nums.length-1;x++){      
        for(let y=x+1;y<nums.length;y++){
            if(nums[x]+nums[y]===target){
                return [x,y];
            }
        }
    }
    return undefined
}