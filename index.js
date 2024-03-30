const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
function toTitleCase(str){
  return str.replace(/\b\w/g, function(c){
    return c.toUpperCase();
  }).replace(/([A-Z])/g, '$1').trim();
}
const titleCased = () => {
  const unchangedWords=['OO',"JSONP?",'API'];
  return tutorials.map(tutorial=>{
const words= tutorial.split(' ')
const tiltleCasedWords=words.map(toTitleCase,word=>{
  if(unchangedWords.includes(word.toUpperCase()) || !isNaN(word))
  {
    return word;
  }else{ return toTitleCase()
  //return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase() 
  }
});
return tiltleCasedWords.join(' ')
});
  }
