const routh = 'http://localhost:3000';

async function news_array () {
  const response = await fetch(`${routh}/newSlider/getNews`);
  const news = await response.json(); 
  return news.resultado;
}
export default news_array;