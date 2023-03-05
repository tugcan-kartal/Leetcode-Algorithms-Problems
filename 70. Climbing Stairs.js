const climbStairs=(n)=>{

    if(n===1){
        return 1;
    }else if(n===2){
        return 2;
    }

    const pastSum=[1,2];        //To find numbers of way it sum last 2 elements ways

    for(let x=2;x<n;x++){
        pastSum[x]=pastSum[x-1]+pastSum[x-2];       
    }
    return pastSum[pastSum.length-1];
}