exports.questionThree = () => {
  console.log("Question 3: in the function named answerThree, return a string formatted as a list of names separated by commas except for the last two names." +
    "This function will pass in an array of objects, each object containing a name, " +
    "which should be separated by an ampersand.");

  //tests
  console.log(answerThree([{
    name: "Bart"
  }, {
    name: "Lisa"
  }, {
    name: "Maggie"
  }])); //expected result:: "Bart, Lisa & Maggie"
  console.log(answerThree([{
    name: "Bart"
  }, {
    name: "Lisa"
  }])); //expected result: "Bart & Lisa"
  console.log(answerThree([{
    name: "Bart"
  }])); //expected result: "Bart"
  console.log(answerThree([])); //expected result: ""
}

const answerThree = (names) => {
  let str = '';
  if (names.length !== 0) {
    let last = names.pop();
    str = names.map( (val, i, arr,) => {
      if (i !== arr[arr.length -1]) {
        return val.name
      }
    }).join(', ')
    str += str !== '' ? ' & ' + last.name : last.name;
  }
  
  return str;
}