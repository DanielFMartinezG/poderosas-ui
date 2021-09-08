
const routh = 'http://64.227.101.60:4000';

//función encargada de traer las preguntas sobre poderosas
async function GetQuestiosnAbout() {
  const response = await fetch(`${routh}/frequentQuestions/getQuestionsAbout`);
  const questions = await response.json();
  return questions.resultado;
}

export default  GetQuestiosnAbout ;