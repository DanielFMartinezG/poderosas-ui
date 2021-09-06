const routh = 'http://64.227.101.60:4000';

/**
 * función encargada de hacer el llamado a la base de datos para
 * obtener las imagenes que conforman el carrusel de AboutUs
 */
async function getSliderImgs() {
  const response = await fetch(`${routh}/aboutus/slider/getImages`);
  const images = await response.json();
  return images.resultado;
}
export default getSliderImgs;