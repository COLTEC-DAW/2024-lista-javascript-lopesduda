function countChars(frase, c){

    var frase =  prompt("Digite sua frase aqui:"); 
    var count = 0; 
     var c = prompt("Digite o caracter que deseja contar");  
    for (let i = 0; i<frase.length; i++ ){
        if (frase[i] == c){
            count++;
        }
    }
    console.log("sua frase possui", count, c); 
}
countChars();