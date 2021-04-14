const interval_hero_slider = (slider_hero_array)=>{
        let hero_slider_box = document.getElementsByClassName("hero-slider-img-box");//llamamos los nodos contenedores de las imagenes
        let dist_img = hero_slider_box[0].offsetWidth;//es
        let hero_text = document.getElementsByClassName("hero-text")[0];//nodo del texto de la sección hero
        let slide_item_postion = document.getElementsByClassName("slide-postion");
        let slider_img_current = document.getElementsByClassName('position_selected');
        let hero_slider_function =(index,dist) => {
                slider_img_current[0].classList.toggle("position_selected");//ocultamos el efecto de item seleccionado al viejo item
                slide_item_postion[index].classList.toggle("position_selected");//agregamos el efecto de item selccionado al nuevo item
                hero_text.textContent = slider_hero_array[index].img_slider_hero.text_hero;//asignamos el nuevo texto
                // //ciclo para trasladar en x los imags box una distancia especifica
                for(let i=0;i<slider_hero_array.length;i++){
                        hero_slider_box[i].style.transform = "translateX("+(dist)+"px)";
                }
        }  
        // slider_img_current[pos].classList.toggle('position_selected');
        if (slider_img_current.length == 0){
                slide_item_postion[0].classList.toggle('position_selected');
                hero_text.textContent = slider_hero_array[0].img_slider_hero.text_hero;//asignamos el nuevo texto
        }else{
                let index= slider_hero_array.findIndex(x => x.slider_position_id == slider_img_current[0].id);
                if (index < (slider_hero_array.length-1)){
                        let hero_img_position =  -(index+1)*dist_img;
                        // index+1 ya que necesitamos trabajar con el proximo indice, no con el actual
                        hero_slider_function((index+1),hero_img_position);
                }else{
                        let hero_img_position = 0;
                        hero_slider_function(0,hero_img_position);
                }
        }
}
export default interval_hero_slider;