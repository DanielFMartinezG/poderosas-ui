
const routh = 'http://localhost:3000';

//función encargada de traer las preguntas de poderosas
async function getQuestions(){
  const response = await fetch(`${routh}/frequentQuestions/getQuestions`);
  const questions = await response.json();
  return questions.resultado;
}

//función encargada de traer las preguntas sobre poderosas
async function GetQuestiosnAbout(){
  const response = await fetch(`${routh}/frequentQuestions/getQuestionsAbout`);
  const questions = await response.json();
  return questions.resultado;
}

module.exports = {getQuestions, GetQuestiosnAbout};