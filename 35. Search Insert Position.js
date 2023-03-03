var searchInsert = function(nums, target) {
    let new_Array=[...nums,target];

    new_Array.sort((a,b)=>{
        return a-b;
    });
   
    return new_Array.indexOf(target);
};

//let dizi = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// for (let i = 0; i < dizi.length; i++) {
//   for (let j = i + 1; j < dizi.length; j++) {
//     if (dizi[i] > dizi[j]) {
//       let temp = dizi[i];
//       dizi[i] = dizi[j];
//       dizi[j] = temp;
//     }
//   }
// }

//if not using sort method u can write codes on above
