const removeDuplicates=(nums)=>{                    //İn this question no allowed to set new array so we have to modify
    let i=0;

    for(let x=1;x<nums.length;x++){
        if(nums.length===0){
            return 0;
        }

        if(nums[x]!==nums[i]){                  //if its not same element we modify array
            i++;                                //in here we set next element
            nums[i]=nums[x];        
        }
    }

    return i+1;                         //+1 came from 0.index there is a element too
}