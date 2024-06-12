var numeroLinhas = parseInt(prompt("Digite o numero de linhas que você deseja")); 
var str = ""; 

for (let i = 0; i < numeroLinhas; i++){
   str += "##" + "#".repeat(i) + "\n";
   }
console.log(str); 

 