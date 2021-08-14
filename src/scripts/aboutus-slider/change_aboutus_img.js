import slide_images from './slide_images'
let change_aboutUs_img = (event) =>{
  let img_box_slide = document.getElementsByClassName("about-us-img-box");
  //identificamos mediante el event si se activo el botón derecho o izquierdo
  if(img_box_slide.length > 3){
    if(event.target.id == 'bttn-slider-right'){
      slide_images(0,"bttn_right");
    }else if(event.target.id == 'bttn-slider-left'){
      slide_images(img_box_slide.length-1,"bttn_left");
    }
  }
}
export default change_aboutUs_img;