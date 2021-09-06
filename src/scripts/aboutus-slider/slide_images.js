/**
 * la presente función se encarga de intercalar la primera y ultima imagen del carrusel, se está manera
 * podero recorrer las imagenes del mismo
 * @param {*} pos variable encargada de especificar la imagen a eliminar y posteriormente agregar
 * @param {*} bttn_slider variable encargada de especificar el botón al cual se hizo click en el slider
 */

let slide_images = (pos,bttn_slider) =>{

  if(window.screen.width >= 1024){
    let img_box_slide = document.getElementsByClassName("about-us-img-box");
    let about_us_slide = document.getElementsByClassName("about-us-slide")[0];
    let img_selected = document.getElementsByClassName("about-us-img-selected");
    if(img_selected.length == 0){
      //entrará al presente condicional cuando se ejecute desde el useEffect
      img_box_slide[2].classList.toggle("about-us-img-selected");
    }else{
      //pos nos permite saber si estamos colocando el primero o ultimo hijo para despues agregarlo
      let templete = img_box_slide[pos].cloneNode(true);
      //quitamos la clase de imagen seleccionada al que la posea
      img_selected[0].classList.toggle("about-us-img-selected");
      //removemos el hijo del principio o final
      about_us_slide.removeChild(img_box_slide[pos]);
      if(bttn_slider == "bttn_right"){
        //agregamos el box img al final
        about_us_slide.appendChild(templete);
      }else{
        //agregamos el box img al principio
        about_us_slide.prepend(templete);
      }
      //el box 3 siempre tendrá el mayor tamaño
      img_box_slide[2].classList.toggle("about-us-img-selected");
    }
  }

}
export default slide_images;