function reverseArray(array){
    var array = [10,20,30,40,50,60,70,80,90,100]; 
     var inverteVector = []; 
    
    for(let i = array.length; i >= 0; i--){
            inverteVector.push(array[i]);
        } 
        console.log (inverteVector);
    }
reverseArray(); 
