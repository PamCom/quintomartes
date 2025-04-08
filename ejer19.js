function fibonacciHasta100() {
    let fib = [0, 1];
    while (fib[fib.length - 1] <= 100) {
      fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    console.log("fibonacci hasta el 100", fib.slice(0, -1));
  }
  
  if (require.main === module) {
    fibonacciHasta100();
  }