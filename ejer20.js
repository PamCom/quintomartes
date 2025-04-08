function multiplosDe3() {
    let num = 3;
    while (num < 50) {
      console.log(num);
      num += 3;
    }
  }
  
  if (require.main === module) {
    multiplosDe3();
  }