const routh = 'http://64.227.101.60:4000';

//función encargada de traer el staff de la BD

async function staff_array() {

  const response = await fetch(`${routh}/staff/getStaff`);
  const images = await response.json();
  return images.resultado;
}
export default staff_array;