
function Verifica(){
    num = 5; 
    if( num % 2 == 0 ){
        console.log("É par");
    }else{
        console.log("É ímpar"); 
    }
}

function VerificaPrimo(){
num = 5; 

for( let i = 2; i < num; i++){
    if ( num %i == 0){
    console.log("o número NÃO é primo"); 
    return; 
}
}
console.log ("o número é primo");
}

Verifica(); 
VerificaPrimo();