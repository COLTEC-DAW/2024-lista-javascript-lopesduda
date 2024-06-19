var numeroLinhas = parseInt(prompt("Digite o numero de linhas que você deseja")); 
var str = ""; 

for (let i = 0; i < numeroLinhas; i++){
if (i % 2 == 0 ) {
    str += "#  #  #  # \n";
}else{
    str += "  #  #  #  #\n"; 
}
   }
console.log(str); 