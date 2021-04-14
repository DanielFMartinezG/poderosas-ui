import React, {useState, useEffect} from 'react';
import '../../styles/hero_slider.css'
import Hero_slider_img from './Hero-slider-img'
import Slider_position from './Hero_slider_position';
import get_hero_images from '../../scripts/hero-slider/get_hero_imges'
import interval_hero_slider from '../../scripts/hero-slider/Interval_hero_slider'
//los componentes tienen la primera letra en mayuscula
let Hero_slider = ()=>{
    let hero_array = get_hero_images();
    const[hero_text, set_text] = useState(hero_array[0].img_slider_hero.text_hero);
    useEffect(() => {
        // componentDidMount events
        let hero_slider_interval;
        interval_hero_slider(hero_array);
        hero_slider_interval= setInterval(()=>{
            interval_hero_slider(hero_array);
        },3500);
        // componentWillUnmount events
        return ()=>{
            clearInterval(hero_slider_interval);
        }
    });
    return(
        <section className="hero-section" id="hero-section">
            <div className = 'hero-slider-container'>
                <div className ='hero-slider'>
                    {
                        hero_array.map(pod_image =>(
                            <Hero_slider_img 
                                img_url = {pod_image.img_slider_hero.hero_img_src}
                                id_box_img ={pod_image.slider_box_id}
                                key = {pod_image.slider_box_id}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="hero-description-box">
                <p className="hero-text"></p>
                <div className="bttn-template btn-see-more">ver más</div>
            </div>
            <div className="hero-position-box">
            {
                hero_array.map(pod_image =>(
                    <Slider_position
                        slide_position = {pod_image.slider_position_id}
                        key = {pod_image.slider_position_id}
                    />
                ))
            }
            </div>
        </section>
    );
}
export default Hero_slider;