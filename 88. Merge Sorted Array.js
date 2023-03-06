var merge = function(nums1, m, nums2, n) {
    let newList1 = nums1.slice(0, m); 
    let newList2 = nums2.slice(0, n); 

    nums1.splice(0, m+n, ...newList1.concat(newList2).sort((a, b) => a - b));

    return nums1;
};