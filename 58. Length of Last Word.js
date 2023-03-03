const lengthOfLastWord=(s)=>{
    let newString=s.trim();

    let newArray=newString.split(" ");
    const indexOfLast=newArray.length-1;

    const lengthOfLastElement=newArray[indexOfLast].length;

    return lengthOfLastElement;
}