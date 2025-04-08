const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function mostrarMenu() {
    console.log("1 opción 1\n2 opción 2\n3 salir");
    readline.question("elige una opcion ", opcion => {
      if (opcion === "3") {
        console.log("chau :v");
        readline.close();
      } else {
        console.log(`ejecutando la opcion ${opcion}...`);
        mostrarMenu();
      }
    });
  }
  
  if (require.main === module) {
    mostrarMenu();
  }