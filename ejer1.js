function sumarArray(arr) {
    return arr.reduce((sum, num) => sum + (typeof num === 'number' ? num : 0), 0);
  }