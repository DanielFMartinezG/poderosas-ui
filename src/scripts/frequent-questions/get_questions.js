
const routh = 'http://64.227.101.60:4000';

//función encargada de traer las preguntas de poderosas
async function getQuestions() {
  const response = await fetch(`${routh}/frequentQuestions/getQuestions`);
  const questions = await response.json();
  return questions.resultado;
}

export default getQuestions;