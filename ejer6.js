function revertirArray() {
    const arr = [1, 2, 3, 4];
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    console.log("array revertido:", reversed);
  }
  
  if (require.main === module) {
    revertirArray();
  }