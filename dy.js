const operate = (a, b, callback) => {
  return callback(a, b);
};
console.log(operate(10, 5, (a, b) => a - b)); 
console.log(operate(10, 5, (a, b) => a + b)); 
console.log(operate(10, 5, (a, b) => a * b)); 
console.log(operate(10, 5, (a, b) => a / b));