import React, {useState,useRef, useEffect} from 'react';
import '../../styles/info_home.css';
import pod_uraba from '../../assets/img-logos/poderosas-uraba.jpg';
import poderosas_team from '../../assets/img-logos/equipo-poderoso.jpg';
import first_testimony from '../../assets/img-logos/testimonio1.jpeg';
import second_testimony from '../../assets/img-logos/testimonio2.jpeg';
import third_testimony from '../../assets/img-logos/testimonio3.jpeg';
import wh_img from '../../assets/img-logos/icon-info-wh-poderosas.png';

const Info_poderosas = ()=>{
  const [whState, setwhState] = useState([]);
  const[testiomnyImg, setTestimonyImg] = useState({cont:1, img:first_testimony});
  const whImg = useRef();
  const whBox = useRef();
  const showWhPoderosas=()=>{
    const img_team_poderosas = whImg.current;
    const box_wh_poderosas = whBox.current;
    img_team_poderosas.style.display = 'none';
    box_wh_poderosas.style.display = 'block';
  }
  const btnWhoPoderosas =()=>{
    showWhPoderosas();
    setwhState({
      title:"¿Quienes Somos?",
      content:"Somos una ONG de Educación Integral para la Sexualidad (EIS) para reforzar el poder de decisión de adolescentes y jóvenes entre los 13 y 20 años de edad en comunidades de mayor grado de vulnerabilidad en Colombia, mediante círculos de mujeres y círculos de hombres extracurriculares basado en un currículo de derechos sexuales y reproductivos con enfoque de género."
    });
  }
  const btnWhatPoderosas =()=>{
    showWhPoderosas();
    setwhState({
      title:'¿Que es lo que Hacemos?',
      content: 
      <ul className="list-content-wh-poderosas">
        <li className="content-wh-poderosas">1. Educamos en derechos sexuales y reproductivos.</li>
        <li className="content-wh-poderosas">2. Motivamos el autoconocimiento, autocuidado y valoración del cuerpo.</li>
        <li className="content-wh-poderosas">3. Facilitamos el reconocimiento y cuestionamiento de estereotipos de género.</li>
      </ul>
    });
  }
  const btnWhyPoderosas =()=>{
    showWhPoderosas();
    setwhState({
      title:'¿Por que lo hacemos?',
      content: 
      <ul className="list-content-wh-poderosas">
        <li className="content-wh-poderosas">1/5 embarazadas son niñas menores de 19 años.</li>
        <li className="content-wh-poderosas">2/3 de esos embarazos son no deseados.</li>
        <li className="content-wh-poderosas">90% de las mujeres NO tienen información básica sobre la menstruación.</li>
        <li className="content-wh-poderosas">70% de las mujeres han sido víctimas de alguna manifestación de violencia por su pareja o ex pareja.</li>
      </ul>
    })
  }
  const changeTestimonials=()=>{
    if (testiomnyImg.cont === 1) {
      setTestimonyImg({cont:2, img:second_testimony});
    } else if (testiomnyImg.cont === 2) {
      setTestimonyImg({cont:3, img:third_testimony});
    } else if(testiomnyImg.cont === 3) {
      setTestimonyImg({cont:1, img:first_testimony});
    }
  }
  useEffect(()=>{
    let info_interval = setInterval(changeTestimonials,5000);
    return ()=>{
      clearInterval(info_interval);
    }
  });
  return (
    <React.Fragment>
      <h2 className='we-are-poderosas-title'>Somos poderosas</h2>
      <section className="section-info-poderosas">
        <div className="cont-info-poderosas cont-wh-poderosas">
          <button className="button-poderosas button-who-poderosas" id="button-who-poderosas" onClick={btnWhoPoderosas}>¿Quienes Somos?</button>
          <button className="button-poderosas button-what-poderosas" id="button-what-poderosas" onClick={btnWhatPoderosas}>¿Qué es lo que Hacemos?</button>
          <button className="button-poderosas button-why-poderosas" id="button-why-poderosas" onClick={btnWhyPoderosas}>¿Por qué lo Hacemos?</button>
          <div className="box-wh-poderosas" ref={whBox}>
            <h3 className="subtitle-wh-poderosas">{whState.title}</h3>
            <div className="content-wh-poderosas">{whState.content}</div>
            <figure className="box-icon-wh-poderosas">
              <img src={wh_img} className="icon-wh-poderosas" alt="Ilustración de una mujer que se ama a sí misma."/>
            </figure>
          </div>
          <figure className="box-img-main-wh-poderosas" ref={whImg}>
            <img src={pod_uraba} alt="" className="img-main-wh-poderosas" />
          </figure>
        </div>
        <div className="cont-imgs-team-poderosas">
          <figure className="box-imgs-team-poderosas">
            <img src={poderosas_team} alt="Imagen del equipo poderoso" className="img-team-poderosas"/>
          </figure>
        </div>
        <div className="cont-info-poderosas cont-testimonials">
          <h3 className="subtitle-testimonials">Testimonios</h3>
          <figure className="box-imgs-testimonials">
            <img src={testiomnyImg.img} alt="Testimonios de las poderosas y poderosos" className="img-testimonials"/>
          </figure>
        </div>
      </section>
    </React.Fragment>
  );
}
export default Info_poderosas;