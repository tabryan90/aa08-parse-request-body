function firstStep(input) {
  let res = input.split('&');
  return res;
}

function secondStep(input) {
  let res = [];

  input.forEach(element => {
    let el = element.split('=');
    res.push(el);
  });

  return res;
}

function thirdStep(input) {
  // Your code here
}

function fourthStep(input) {
  // Your code here
}

function fifthStep(input) {
  // Your code here
}

function parseBody(str) {
  // Your code here
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
