var longestCommonPrefix=(strs)=>{
    let commonLetters="";
    let toCompare=[];
//important part in below line i compare other elements for first word 
    for(let x=0;x<strs[0].length;x++){

        toCompare=[];       ///Reset here array

        for(let y=0;y<strs.length;y++){
            toCompare.push(strs[y][x]);
        }

        if(toCompare.every((i)=>i===strs[0][x])){
            commonLetters+=strs[0][x];
        }else{
            break;
        }
    }
    return commonLetters;
}