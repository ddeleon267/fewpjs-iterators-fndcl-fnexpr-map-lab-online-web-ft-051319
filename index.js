const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(str => {
    return str.split(" ").map(s => s[0].toUpperCase() + s.slice(1)).join(" ")
  })
}

// const titleCased = () => {
//   const splitStrings = tutorials.map(str => str.split(" "))
//   return splitStrings.map(str => {
//     return str.map(s => s[0].toUpperCase() + s.slice(1)).join(" ")
//   })
// }

// const titleCased = () => { 
//    return tutorials.map(function(tutorial){
//     let tutorialArray = tutorial.split(' ')
//     return tutorialArray.map( word => {
//       word = word.charAt(0).toUpperCase() + word.slice(1);
//       return word;
//     }).join(" ")
//   })
// }
