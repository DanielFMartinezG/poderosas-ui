import React from 'react'
import change_hero_img from '../../scripts/hero-slider/change_hero_img'
let Slider_position = (props)=>{
    return(
        //desactivo por ahora la función de cambiar la imagen del carrusel mediante el item de posición
        // <div className="slide-postion" id={props.slide_position} onClick={change_hero_img}></div>
        <div className="slide-postion" id={props.slide_position} ></div>
    );
} 
export default Slider_position;