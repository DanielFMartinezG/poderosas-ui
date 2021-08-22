import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import '../../styles/hero_slider.css'
import Hero_slider_img from './Hero-slider-img'
import Slider_position from './Hero_slider_position';
import getHeroImages from '../../scripts/hero-slider/get_hero_imges'
import interval_hero_slider from '../../scripts/hero-slider/Interval_hero_slider'
//los componentes tienen la primera letra en mayuscula
let Hero_slider = () => {

    //utilizamos heroArray para almacenar las imagenes optenidas de la BD
    const [heroArray, setHeroArray] = useState([]);
    //utilizo httpRequest para controlar el llamado de las imagenes de la BD 
    const [httpRequest, setHttpRequest] = useState(true);

    //función encargada de llamar y almacenar las imagenes del carrusel
    async function callHeroImages() {
        const response = await getHeroImages();
        setHeroArray(response);
    }
    
    useEffect(() => {
        //httpRequest permite controlar que se ejecute una unica vez el llamado a la API
        if (httpRequest) {
            callHeroImages();
            setHttpRequest(false);
        } else if (httpRequest == false && heroArray.length != 0) {
            //ejecutamos el movimiento del carrusel cuando se hayan optenido las imagenes 
            // componentDidMount events
            let hero_slider_interval;
            interval_hero_slider(heroArray);
            hero_slider_interval = setInterval(() => {
                interval_hero_slider(heroArray);
            }, 3500);
            // componentWillUnmount events
            return () => {
                clearInterval(hero_slider_interval);
            }
        }
    });
    return (
        <section className="hero-section" id="hero-section">
            <div className='hero-slider-container'>
                <div className='hero-slider'>
                    {
                        heroArray.map(pod_image => (
                            <Hero_slider_img
                                img_url={pod_image.img_slider_hero.img_phrase_src}
                                id_box_img={pod_image.slider_box_id}
                                key={pod_image.slider_box_id}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="hero-description-box">
                <p className="hero-text"></p>
                <Link to='/poderosas/about-us' className='button-template btn-see-more'>
                    ver más
                </Link>
            </div>
            <div className="hero-position-box">
                {
                    heroArray.map(pod_image => (
                        <Slider_position
                            slide_position={pod_image.slider_position_id}
                            hero_array = {heroArray}
                            key={pod_image.slider_position_id}
                        />
                    ))
                }
            </div>
        </section>
    );
}
export default Hero_slider;