const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function login() {
    const password = "3022";
    let intentos = 3;
    
    function intento() {
      readline.question("comtraseña: ", input => {
        if (input === password) {
          console.log("acceso permitido ");
          readline.close();
        } else {
          intentos--;
          if (intentos > 0) {
            console.log(`contraseña incorrecta aun te quedan ${intentos} intentos.`);
            intento();
          } else {
            console.log("se acabaron tus intentos");
            readline.close();
          }
        }
      });
    }
  
    intento();
  }
  
  if (require.main === module) {
    login();
  }