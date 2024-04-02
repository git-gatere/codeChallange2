function charSwap(word) {
  //the function recieves one parameter
  let newWord = "";
  //newWord is the result of the converted string
  for (let i = 0; i < word.length; i++) {
    // checks the place of the character and iterates until the whole word has been performed on the desired action
    if (word.charAt(i) === word.charAt(i).toUpperCase()) {
      newWord += word.charAt(i).toLowerCase();
      // if the character is in uppercase, it is converted to lowercase
    } else {
      newWord += word.charAt(i).toUpperCase();
      // if the character is in lowercase, is converted to uppercase
    }
  }
  return newWord;
  // returns the new word which is in toggle case in reference to the input word
}
console.log(charSwap(""));
