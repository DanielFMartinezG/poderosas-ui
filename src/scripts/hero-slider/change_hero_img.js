import get_hero_images from './get_hero_imges'
const change_hero_img = (event)=>{
  let hero_array = get_hero_images();
  // clearInterval(hero_slider_interval); // COMO DETENGO EL SET INTERVAL QUE UTILIZO EN EL USE EFFECT????
  let hero_slider_box = document.getElementsByClassName("hero-slider-img-box");//llamamos los nodos contenedores de las imagenes
  let dist_img = hero_slider_box[0].offsetWidth;//obtenemos el ancho del contenedor
  let hero_text = document.getElementsByClassName("hero-text")[0];//nodo del texto de la sección hero
  let slide_item_postion = document.getElementsByClassName("slide-postion");
  let slider_img_current = document.getElementsByClassName('position_selected');
  let hero_slider_function =(index,dist) => {
    slider_img_current[0].classList.toggle("position_selected");//ocultamos el efecto de item seleccionado al viejo item
    slide_item_postion[index].classList.toggle("position_selected");//agregamos el efecto de item selccionado al nuevo item
    hero_text.textContent = hero_array[index].img_slider_hero.text_hero;//asignamos el nuevo texto
    // //ciclo para trasladar en x los imags box una distancia especifica
    for(let i=0;i<hero_array.length;i++){
      hero_slider_box[i].style.transform = "translateX("+(dist)+"px)";
    }
  }  

  let index= hero_array.findIndex(x => x.slider_position_id == event.target.id);
  let hero_img_position = -(dist_img*index);
  hero_slider_function(index,hero_img_position);

}
export default change_hero_img;