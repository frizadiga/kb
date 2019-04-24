export const sum = (input) => {
  const value = input.split(',').map(item => parseInt(item.trim(), 10));
  return value.reduce((item, acc) => item + acc, 0);
};

export const multiply = (input) => {
  const value = input.split(',').map(item => parseInt(item.trim(), 10));
  return value.reduce((item, acc) => item * acc, 1);
};

export const primes = (int) => {
  const isPrime = (number) => {
    if (number <= 1) return false;

    // The check for the number 2 and 3
    if (number <= 3) return true;

    if (number % 2 === 0 || number % 3 === 0) return false;

    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) return false;
    }

    return true;
  };

  const result = [];

  for (let i = 2; result.length < int; i += 1) {
    if (isPrime(i)) result.push(i);
  }

  return result.join(', ');
};

export const fibonacci = (int) => {
  // const result = [0, 1];
  // for (let i = 2; i < int + 1; i++) {
  //   result.push(result[i - 2] + result[i - 1]);
  // }

  // return result.join(', ');

  function fib(n) {
    if (n < 2){
      return n
    }
    return fib(n - 1) + fib (n - 2)
  }

  const result = [];

  for (let i = 0; result.length < int; i += 1) {
    result.push(fib(i));
  }

  return result.join(', ');
};
