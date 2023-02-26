var twoSum=function(nums,target){
    let index=0;
    while(index<nums.length){
        let total=nums[index]+nums[index+1];
        if(total===target){
            return [index,index+1];
        };
        index++;
    }
}

console.log(twoSum([2,7,11,15],9));