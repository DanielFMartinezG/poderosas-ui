import React, { useState, useEffect } from 'react'
import btn_left from '../../assets/img-stickers/slide-bttn-left.png'
import btn_right from '../../assets/img-stickers/slide-bttn-right.png'
import AbourUs_slider_img from './AboutUs-slider-img'
import get_slider_imgs from '../../scripts/aboutus-slider/get_aboutus_slider_img'
import slide_images from '../../scripts/aboutus-slider/slide_images'
import change_aboutUs_img from '../../scripts/aboutus-slider/change_aboutus_img'
import '../../styles/aboutUs_slider.css'

const AboutUs_Slider = () => {
  // const[key_number, set_key_number] = useState(0);
  let images_array = get_slider_imgs();
  let key_number = 0;
  let change_key = () => {
    key_number++;
    return key_number;
  }
  useEffect(() => {
    slide_images();
  });
  return (
    <section className="about-us-slider-section" id="about-us-slider-section">
      <h2 className='we-are-poderosas-title'>Somos Poderosas</h2>
      <div className="about-us-slider-container">
        <div className="bttn-slide-left" onClick={change_aboutUs_img}>
          <img src={btn_left} alt="botón izquierdo" className="bttn-slider" id="bttn-slider-left" />
        </div>
        <div className="about-us-slide-box">
          <div className="about-us-slide">
            {
              images_array.map(image => (
                <AbourUs_slider_img
                  url_img={image.img_src}
                  key={`slide-img-${(change_key())}`}
                />
              ))
            }
          </div>
        </div>
        <div className="bttn-slide-right" onClick={change_aboutUs_img}>
          <img src={btn_right} alt="botón derecho" className="bttn-slider" id="bttn-slider-right" />
        </div>
      </div>
    </section>
  );
}
export default AboutUs_Slider;