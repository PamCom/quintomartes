function contarPares() {
    const arr = [1, 2, 3, 4, 5, 6,8,10];
    const pares = arr.filter(num => num % 2 === 0).length;
    console.log("numeros pares:", pares);
  }
  
  if (require.main === module) {
    contarPares();
  }