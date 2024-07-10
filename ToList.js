function ToList(array){
    if(array.length == 0){
        return null;
    }
 
 
    var list = {
        value: array[0],
        rest: null
    }
 
 
    let current = list;
    for(let i = 1; i < array.length; i++){
        current.rest = {
            value: array[i],
            rest: null
        }
        current = current.rest;
    }
    return list;
 }
 
 
 let array=[1,2,3,4,5,6]
 console.log(ToList(array));