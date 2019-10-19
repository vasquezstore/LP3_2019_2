function verificarPalindromo(){
        let frase1 = document.getElementById('frase1').value;
        let parsed = frase1.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');
        let fra=parsed.toLowerCase();
        let reverso='';
        for(let i=fra.length-1;i>=0;i--){
          reverso=reverso+=fra[i]; 
        }
        if(fra===reverso){
          document.getElementById('resultado').innerHTML='é palindromo';
        }else{
          document.getElementById('resultado').innerHTML='não é palindromo';
        }
}

function verificarSeEstaContido(){
  let campo1 = document.getElementById('campo1').value;
  let campo2 = document.getElementById('campo2').value;
  let parsed1 = campo1.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');
  let parsed2 = campo2.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');
  let camp1=parsed1.toLowerCase();
  let camp2=parsed2.toLowerCase();
  let inclusao=camp1.includes(camp2);
  if(inclusao==true){
    document.getElementById('resultado2').innerHTML='está contido';
  }else{
    document.getElementById('resultado2').innerHTML='não está contido';
  }

}


        

      