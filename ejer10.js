function tablaMultiplicar() {
    const numero = 4;
    console.log(`tabla del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  }
  
  if (require.main === module) {
    tablaMultiplicar();
  }