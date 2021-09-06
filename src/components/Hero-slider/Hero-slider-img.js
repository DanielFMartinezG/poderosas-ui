import React from 'react-dom';
const Hero_slider_img = (props) =>{
    return(
        <div className="hero-slider-img-box" id={props.id_box_img}>
            <img src={props.img_url} alt="hero img" className="hero-img" />
        </div>
    );
}
export default Hero_slider_img;