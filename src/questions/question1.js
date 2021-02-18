exports.questionOne = () => {
  console.log("Question 1: In the function named answerOne, return a reversed string of the value passed into the function. ");

  //tests below
  console.log(answerOne("I am hungry!")); //expected result: !yrgnuh ma I
  console.log(answerOne("reward!")); //expected result: drawer!
  console.log(answerOne("Ramen")); //expected result: nemaR
  console.log(answerOne("robot")); //expected result: tobor
}

const answerOne = (str) => {
  var splitStr = str.split('');
  var reverseArr = splitStr.reverse();
  var joinArr = reverseArr.join('');
  return joinArr
}

