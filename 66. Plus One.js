const plusOne=(digits)=>{
    for(let x=digits.length-1;x>=0;x--){
        if(digits[x]<9){        //if the last digit of array smaller than 9 is reduce 1 and return
            digits[x]+=1;
            return digits;
        }else{
            digits[x]=0;        //if not it means last digit is 9 and it add 1 and makes 0 until 
    }                           //find smaller than 9 if cant find add 1 in start with unshift
}

    digits.unshift(1);
    return digits;
}