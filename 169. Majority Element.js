const majorityElement=(nums)=>{
    const length=nums.length;
    for(let x=0;x<length;x++){
        let count=0;
        for(let y=0;y<length;y++){
            if(nums[y]===nums[x]){
                count++;
            }
        }
        if(count>length/2){
            return nums[x];
        }
    }

    return -1;
}

// var majorityElement = function(nums) {
//      for(let x=0;x<nums.length;x++){
//          let filteredItems=nums.filter((element)=>element===nums[x]);
//          if(filteredItems.length>nums.length/2){
//              return nums[x]
//          }
//      }
// };