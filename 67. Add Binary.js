var addBinary = function(a, b) {
    if (a.length > b.length) {                      //in here checking which one is more have length with that we can stop failing adding last digits
        b = '0'.repeat(a.length - b.length) + b;
    } else {
        a = '0'.repeat(b.length - a.length) + a;
    }

    let answer="";
    let carry=false;

    for(let x=a.length-1,y=b.length-1;x>=0 || y>=0;x--,y--){
        if(a[x]==="0" && b[y]==="0"){
            if(carry){
                answer=answer+"1"
                carry=false;
            }else{
                answer=answer+"0";
            }
        }else if(a[x]==="1" && b[y]==="0"){
            if(carry){
                answer=answer+"0"
                carry=true;
            }else{
                answer=answer+"1";
                carry=false;
            }
        }else if(a[x]==="0" && b[y]==="1"){
            if(carry){
                answer=answer+"0"
                carry=true;
            }else{
                answer=answer+"1";
                carry=false;
            }
        }else if(a[x]==="1" && b[y]==="1"){
            if(carry){
                answer=answer+"1"
                carry=true;
            }else{
                answer=answer+"0";
                carry=true;
            }
        }
    }    

    if (carry) {
        answer += '1';
    }

    let reversedString="";
    for(let i=answer.length-1;i>=0;i--){
        reversedString+=answer[i]
    }

    return reversedString;
};
