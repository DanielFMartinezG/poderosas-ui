const routh = 'http://localhost:3000';

async function staff_array () {
  
  const response = await fetch(`${routh}/staff/getStaff`);
  const images = await response.json(); 
  return images.resultado;
}
export default staff_array;