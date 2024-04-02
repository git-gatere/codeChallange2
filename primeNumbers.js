
function primeNumbers(array) {
  // declares the function  primeNumbers which accepts only one parameter
  let primes = [];
  // primes will be the new array formed when we are through thus we declare it here
  for (let x = 0; x < array.length; x++) {
    let number = array[x];
    let isPrime = true;
    // initially, every number is taken to be prime. The function checks all the elements of the array
    if (number !== 1) {
      // 1 is not a prime number therefore we want only the numbers not equal to 1 to be verified
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          isPrime = false;
          // checks whether the number is divisible by any number greater than one and less than itself
          break;
          // stops the loop
        }
      }
    } else {
      isPrime = false;
    }
    if (isPrime) {
      primes.push(number);
      // if the number is a prime number it is added to the new arra 'primes'
    }
  }
  return primes;
}

console.log(primeNumbers([2, 3, 5, 1, 7, 8, 45, 67, 23]));
