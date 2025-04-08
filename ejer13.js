function cuentaRegresiva() {
    let numero = 5;
    while (numero >= 0) {
      console.log(numero);
      numero--;
    }
  }
  
  if (require.main === module) {
    cuentaRegresiva();
  }