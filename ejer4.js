function ordenarArray() {
    const arr = [3, 1, 4, 1, 5];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    }
    console.log("el array ordenado:", arr);
  }
  
  if (require.main === module) {
    ordenarArray();
  }