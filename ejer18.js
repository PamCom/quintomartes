const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function sumarHastaCero() {
    let suma = 0;
    
    function preguntar() {
      readline.question("ingresa un numero (0 para terminar): ", input => {
        const num = parseFloat(input);
        if (num === 0) {
          console.log("la suma total:", suma);
          readline.close();
        } else {
          suma += num;
          preguntar();
        }
      });
    }
  
    preguntar();
  }
  
  if (require.main === module) {
    sumarHastaCero();
  }