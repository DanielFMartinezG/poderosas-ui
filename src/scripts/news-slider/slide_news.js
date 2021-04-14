let slide_news = (content_news_slider) =>{
  let news_slider = document.getElementsByClassName("news-slider")[0];
  let transition_value = 0;
  //es necesario utilizar el ancho de la caja y el numero de cajas que haya
  if (window.screen.width < 1024){
    transition_value = 300 * content_news_slider.length;
  }else{
    transition_value = 370 * content_news_slider.length;
  }
  //función tipo keyFrame para utilizarla en el animation
  let scroll_transition = [
    {transform: "translateX(0)"},
    {transform: "translateX("+ (-transition_value)+"px)"}
  ];
  //agregamos la propiedad animate al slider
  news_slider.animate(scroll_transition,{  
    duration: 25000,
    iterations: Infinity,
    easing: "linear"
  });
}
export default slide_news;