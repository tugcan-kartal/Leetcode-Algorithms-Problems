var singleNumber = function(nums) {

  for(let i = 0; i < nums.length; i++){

    let elementToFind = nums[i];

    let check = nums.findIndex((el) => el === elementToFind);
    nums.splice(check, 1);
    
    let check2 = nums.findIndex((el) => el === elementToFind);
    if(check2 === -1){
      return elementToFind;
    }
    nums.splice(check, 0, elementToFind);

  }

};
