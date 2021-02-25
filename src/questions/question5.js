const axios = require("axios");

exports.questionFive = () => {
  console.log("Question 5: Work are organising a seminar for those who are planning their retirement. In the function answerFive, " +
    "make a HTTP GET request using axios with the url listed below and return a filtered array of employees where their age is equal or greater than 50." +
    "(Hint: axios is a promised based library, consider how to handle this so the data is returned. ");
  console.log("axios docs can be found here: https://github.com/axios/axios, guide can be found here: https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/");
  console.log(answerFive());
}

const answerFive = () => {
  const url = "https://europe-west2-dpduk-t-insight-l1.cloudfunctions.net/employees";

  axios.get(url).then(employees => {
    let employeesList = employees.data;
    let filterData = employeesList.filter(d => { 
      return getEmployeeDateOfBirth(d.dateOfBirth) >= 50
    })
    console.log(filterData)
  })   
}

const getEmployeeDateOfBirth = (dob) => {
  return Math.floor((new Date() - new Date(dob).getTime()) / 3.15576e+10);
}