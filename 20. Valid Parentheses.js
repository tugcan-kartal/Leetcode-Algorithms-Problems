var isValid = function(s) {
    let stack = [];
    let openToClose = {
      '(': ')',
      '[': ']',
      '{': '}'
    };
  
    for(let i=0;i<s.length;i++){
        if(s[i] in openToClose){
            stack.push(s[i])
        }else{
            let lastOpen=stack.pop();
            if(s[i]!==openToClose[lastOpen]){
                return false
            }else{
                continue
            }
        }
    }
  
    return stack.length===0;
  };
  