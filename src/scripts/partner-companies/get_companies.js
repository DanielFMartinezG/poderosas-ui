const routh = 'http://localhost:3000';

async function companies_array() {
  const response = await fetch(`${routh}/partnerCompanies/getCompanies`);
  const companies = await response.json();
  return companies.resultado;
}
export default companies_array;