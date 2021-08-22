const routh = 'http://localhost:3000';

//función encargada de traer los eventos realizados en los departamentos
async function getEventsDepartment() {
  const response = await fetch(`${routh}/map/getEvent`);
  const events = await response.json();
  return events.resultado;
}
export default getEventsDepartment;