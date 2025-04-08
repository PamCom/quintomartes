function encontrarExtremos() {
    const numeros = [7, 3, 9, 2];
    console.log("mayor:", Math.max(...numeros), "menor:", Math.min(...numeros));
  }
  
  if (require.main === module) {
    encontrarExtremos();
  }