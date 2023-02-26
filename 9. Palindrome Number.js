var isPalindrome = function(x) {
    const data=x.toString();

    for(let i=0;i<data.length/2;i++){
        if(data[i]!==data[data.length-1-i]){
            return false
        }
    }

    return true
};