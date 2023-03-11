const getRow=(rowIndex)=>{
    let row=[1];
    
    for(let i=1;i<=rowIndex;i++){
        
        let newRow=[1];


        for(let j=1;j<row.length;j++){
            newRow.push(row[j]+row[j-1]);
        }

        newRow.push(1);
        row=newRow;
    }

    return row;
}