for(let str = 'baaa', i = 0, j=10; str != 'maaa'; i++, j++){
    if(i ===3){
        str = j
    }else if(j===14){
        str = 'sisi'
    }
    break;
    console.log(str)
}