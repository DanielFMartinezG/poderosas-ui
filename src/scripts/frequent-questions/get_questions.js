
const routh = 'http://localhost:3000';

async function getQuestions(){
  const response = await fetch(`${routh}/frequentQuestions/getQuestions`);
  const questions = await response.json();
  return questions.resultado;
}

async function GetQuestiosnAbout(){
  const response = await fetch(`${routh}/frequentQuestions/getQuestionsAbout`);
  const questions = await response.json();
  return questions.resultado;
}

module.exports = {getQuestions, GetQuestiosnAbout};