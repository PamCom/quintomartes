function sumarPositivos() {
    const numeros = [1, -2, 3, -4, 5];
    const suma = numeros.filter(n => n > 0).reduce((a, b) => a + b, 0);
    console.log("suma de positivos:", suma);
  }
  
  if (require.main === module) {
    sumarPositivos();
  }