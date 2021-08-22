const routh = 'http://localhost:3000';

//función encargada de traer las noticias de la BD

async function news_array () {
  const response = await fetch(`${routh}/newSlider/getNews`);
  const news = await response.json(); 
  return news.resultado;
}
export default news_array;