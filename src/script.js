//Inicio da funcao Converter
function Converter(){
  
  //Criação de variáveis
  var valor = parseFloat(document.getElementById("valor").value);  //Variavel valor recebe valor do elemento html de id "valor"
  var valorConvertido;
  
  if(document.getElementById("cambioBitcoin").checked == true){ //Se elemento de id "cambioBitcoin" estiver marcado
    valorConvertido = (valor/251194.68).toFixed(7);
  }
  else if(document.getElementById("cambioEuro").checked == true){ //Se elemento de id "cambioEuro" estiver marcado
    valorConvertido = (valor/6.22).toFixed(2);
  }
  else if(document.getElementById("cambioDolar").checked == true){ //Se elemento de id "cambioDolar" estiver marcado
    valorConvertido = (valor/5.26).toFixed(2);
  }
  document.getElementById("valorConvertido").innerHTML = valorConvertido; // Atribuição do elemento "valorConvertido"
}
