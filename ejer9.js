function primerMultiploDe5() {
    const arr = [2, 4, 5, 7, 10];
    const multiplo = arr.find(num => num % 5 === 0);
    console.log("primer multiplo de 5:", multiplo);
  }
  
  if (require.main === module) {
    primerMultiploDe5();
  }