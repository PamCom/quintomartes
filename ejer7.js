function convertirMayusculas() {
    const nombres = ["garcio", "garcia", "garlota"];
    console.log("nombre en mayuscula:", nombres.map(n => n.toUpperCase()));
  }
  
  if (require.main === module) {
    convertirMayusculas();
  }