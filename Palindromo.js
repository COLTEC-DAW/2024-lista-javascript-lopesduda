function palindromo(){
    var palavra = prompt("Digite uma palavra:");
    palavra = palavra.toLowerCase(); 
    
    for(let i = 0; i < palavra.length; i++){
        if( palavra[i] != palavra [(palavra.length-i) -1]){
            console.log ("A palavra digitada não é palíndroma");
            return 0; 
        }
       
        } console.log("A palavra digitada é palíndroma");
    }palindromo(); 
    