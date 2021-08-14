const routh = 'http://localhost:3000';

async function getEventsDepartment() {
  const response = await fetch(`${routh}/map/getEvent`);
  const events = await response.json();
  return events.resultado;
}
export default getEventsDepartment;