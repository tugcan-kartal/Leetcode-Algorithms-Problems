var romanToInt = function(s) {
    const len=s.length;
    let total=0;

    for(let x=0;x<len;x++){
        if(s[x]==="I" && s[x+1]==="V"){
            total+=4;
            x++;            //to skip the next iteration cuz we already added next character
        }else if(s[x]==="I" && s[x+1]==="X"){
            total+=9;
            x++;
        }else if(s[x]==="X" && s[x+1]==="L"){
            total+=40;
            x++;
        }else if(s[x]==="X" && s[x+1]==="C"){
            total+=90;
            x++;
        }else if(s[x]==="C" && s[x+1]==="D"){
            total+=400
            x++
        }else if(s[x]==="C" && s[x+1]==="M"){
            total+=900;
            x++;
        }else if(s[x]==="I"){
            total+=1;
        }else if(s[x]==="V"){
            total+=5;
        }else if(s[x]==="X"){
            total+=10;
        }else if(s[x]==="L"){
            total+=50;
        }else if(s[x]==="C"){
            total+=100;
        }else if(s[x]==="D"){
            total+=500;
        }else if(s[x]==="M"){
            total+=1000;
        }
        
    }

    return total
};