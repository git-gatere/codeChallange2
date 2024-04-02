/*let number;
// declares a variable called number
if (number !== 1) {
    // checks if a number is not equal to 1 because 1 is not a prime number
  for (let i = 2; i < number; i++) {
    let div = number / i;
    // checks whether the input number is divisible by any integer less than itself but greater than 1
    function isInteger() {
        // Check if the value is a number and if it's an integer
        let status;
        if (typeof div === 'number' && Number.isInteger(div))
        // if the result of dividing the number is an integer then the number is a prime number.
        {status = 'Number is prime'}
        else
        {status = 'Number is not prime'}
        return status
        // ends the running of function
    }

    console.log(number = 4);
    
  }
} */

let number = 4;
// Initialize the variable number
if (number !== 1) {
  let isPrime = true;
  // Assume number is prime initially
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      // Check if number is divisible by any integer greater than 1 but less than itself
      isPrime = false;
      // If it is divisible, then it's not prime
      break;
      // exit the loop
    }
  }
}
