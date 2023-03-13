var isPalindrome = function(s) {
    let newForm=s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedForm=newForm.split("").reverse().join("");
    return newForm===reversedForm;
};