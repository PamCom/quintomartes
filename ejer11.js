function fibonacci() {
    let fib = [0, 1];
    for (let i = 2; i < 10; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log("fibonacci:", fib);
  }
  
  if (require.main === module) {
    fibonacci();
  }