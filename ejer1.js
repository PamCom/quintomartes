function sumarArray() {
    const arr = [1, 2, 3, 4];
    const suma = arr.reduce((a, b) => a + b, 0);
    console.log("sumam el array:", suma);
  }
  
  if (require.main === module) {
    sumarArray();
  }