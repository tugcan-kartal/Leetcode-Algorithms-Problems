var convertToTitle = function(columnNumber) {
    let result="";
    while(columnNumber>0){
        const remainder=(columnNumber-1)%26;
        result=String.fromCharCode(65+remainder)+result;
        columnNumber=Math.floor((columnNumber-1)/26);
    }
    return result;
};