function sumarImpares() {
    let suma = 0;
    for (let i = 1; i <= 50; i += 2) {
      suma += i;
      if (suma > 500) {
        console.log("suma supero a 500:", suma);
        break;
      }
    }
  }
  
  if (require.main === module) {
    sumarImpares();
  }