const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function preguntar(question) {
  return new Promise(resolve => {
    rl.question(question, answer => {
      resolve(answer);
    });
  });
}

async function sumarHastaCero() {
  let suma = 0;
  let numero;

  do {
    const input = await preguntar("Ingresa un número (0 para terminar): ");
    numero = parseFloat(input);
    suma += numero;
  } while (numero !== 0);

  console.log("La suma total:", suma);
  rl.close();
}

if (require.main === module) {
  sumarHastaCero();
}
