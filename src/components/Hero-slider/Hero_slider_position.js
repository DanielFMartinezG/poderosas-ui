import React from 'react'
import change_hero_img from '../../scripts/hero-slider/change_hero_img'
let Slider_position = (props)=>{
    return(
        <div className="slide-postion" id={props.slide_position} onClick={change_hero_img}></div>
    );
} 
export default Slider_position;