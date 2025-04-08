const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function adivinarNumero() {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    
    function preguntar() {
      readline.question("adivina un numero del 1 alk 10: ", input => {
        if (parseInt(input) === numeroAleatorio) {
          console.log("correcto");
          readline.close();
        } else {
          console.log("incorrecto, intentalo denuevo");
          preguntar();
        }
      });
    }
  
    preguntar();
  }
  
  if (require.main === module) {
    adivinarNumero();
  }