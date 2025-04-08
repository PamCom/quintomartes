const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function validarEntrada() {
    readline.question("ingresa un numero mayor a 0 ", input => {
      if (parseFloat(input) > 0) {
        console.log("numero valido");
        readline.close();
      } else {
        console.log("numero invalido");
        validarEntrada();
      }
    });
  }
  
  if (require.main === module) {
    validarEntrada();
  }