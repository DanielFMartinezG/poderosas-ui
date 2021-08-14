const routh = 'http://localhost:3000';

async function getSliderImgs(){

  const response = await fetch(`${routh}/aboutus/slider/getImages`);
  const images = await response.json(); 
  return images.resultado;
}
export default getSliderImgs;