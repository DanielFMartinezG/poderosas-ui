import slide_images from './slide_images'
//la presente función permite identificar si se hizo click sobre el botón
//left or rigth del carrusel de imagenes de aboutUs
let change_aboutUs_img = (event) =>{
  let img_box_slide = document.getElementsByClassName("about-us-img-box");
  //identificamos mediante el event.target.id si se activo el botón derecho o izquierdo
  //la función de slide_images solo se ejecutará cuando haya minimo 3 imagenes
  if(img_box_slide.length > 3){
    if(event.target.id == 'bttn-slider-right'){
      slide_images(0,"bttn_right");
    }else if(event.target.id == 'bttn-slider-left'){
      slide_images(img_box_slide.length-1,"bttn_left");
    }
  }
}
export default change_aboutUs_img;