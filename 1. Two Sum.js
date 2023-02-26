var twoSum=(nums,target)=>{
    for(let x=0;x<nums.length-1;x++){       //Burda eksi 1 dedim çünkü son elemanı kontrol etmek için bir sonraki elemanı kontrol etmemiz gerekiyor. Eğer eksi 1 yapmazsak son elemanı kontrol etmek için bir sonraki elemanı kontrol edemeyiz. Çünkü son elemanın bir sonraki elemanı yoktur. Bu yüzden eksi 1 dedik.
        for(let y=x+1;y<nums.length;y++){
            if(nums[x]+nums[y]===target){
                return [x,y];
            }
        }
    }
    return undefined
}