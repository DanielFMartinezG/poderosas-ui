const routh = 'http://64.227.101.60:4000';

//función encargada de traer las noticias de la BD

async function companies_array() {
  const response = await fetch(`${routh}/partnerCompanies/getCompanies`);
  const companies = await response.json();
  return companies.resultado;
}
export default companies_array;