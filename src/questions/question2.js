exports.questionTwo = () => {
  console.log("Question 2: In the function named answerTwo, return the number of vowels in the given string. " +
    "The input string will only consist of lowercase letters and/or spaces");

  //tests below
  console.log(answerTwo("abracadabra")); //expected result: 5
  console.log(answerTwo("pear tree")); //expected result: 4
  console.log(answerTwo("o a kak ushakov lil vo kashu kakao")); //expected result: 13
  console.log(answerTwo("my pyx")); //expected result: 0
}

const answerTwo = (str) => {
  var m = str.match(/[aeiou]/gi);
  // return m === null ? 0 : m.length;
  if (m !== null) {
    return m.length
  } else {
    return 0
  }
}