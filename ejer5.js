function buscarNombre() {
    const nombres = ["garcio", "garcia", "garlota"];
    const nombre = "garlota";
    const indice = nombres.indexOf(nombre);
    console.log(`${nombre} está en el índice ${indice}`);
  }
  
  if (require.main === module) {
    buscarNombre();
  }