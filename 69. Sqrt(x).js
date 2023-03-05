var mySqrt = function(x) {
    if(x===0){
        return 0
    }else if(x===1){
        return 1
    }else if(x===2){
        return 1
    }

    for(let a=0;a<x;a++){
        if(a*a===x){
            return a
        }else if(a*a>x){
            return a-1
        }
    }
};

