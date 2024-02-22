const fib = (p) => {
  if (p <= 0) {
    return 0
  }
  let [m, n] = [0, 1]
  for (let i = 1; i < p; i += 1) {
    [m, n] = [n, n + m]
  }
  return n
}

const sumFibonacci = (n) => {
  if (n <= 0 || !Number.isInteger(n)) {
    return 0;
  }

  const iter = (counter, acc) => {
    if (counter <= 0) {
      return acc;
    }
    return iter(counter - 1, fib(counter) + acc);
  };

  return iter(n - 1, 0);
}

console.log(fib(0))
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))

console.log('abc', sumFibonacci('abc'))
console.log(-1, sumFibonacci(0))
console.log(0, sumFibonacci(0))
console.log(1, sumFibonacci(1))
console.log(2, sumFibonacci(2))
console.log(3, sumFibonacci(3))
console.log(4, sumFibonacci(4))
console.log(5, sumFibonacci(5))
console.log(6, sumFibonacci(6))
console.log(7, sumFibonacci(7))
