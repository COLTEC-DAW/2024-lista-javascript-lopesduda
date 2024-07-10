function mod2(number){
    if(number % 2 == 0){
        return number; 
    }else{
        return 0; 
    }
}

function divide2(){
    var number = 45; 
    console.log("O numero: ", mod2(number), "é  par"); 
}

divide2(); 