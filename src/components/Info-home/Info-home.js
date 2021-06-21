import React, { useState, useRef, useEffect } from 'react';
import '../../styles/info_home.css';
import poderosas_team from '../../assets/img-logos/equipo-poderoso.png';
import first_testimony from '../../assets/img-logos/testimonio1.jpeg';
import second_testimony from '../../assets/img-logos/testimonio2.jpeg';
import third_testimony from '../../assets/img-logos/testimonio3.jpeg';
import wh_img from '../../assets/img-logos/icon-info-wh-poderosas.png';

const Info_poderosas = () => {
  /* creamos un estado incializado para manipular el comportamiento de la sección de los WH-Buttons*/
  const [whState, setwhState] = useState({
    title: "¿Quienes Somos?",
    content: "Somos una ONG de Educación Integral para la Sexualidad (EIS) para reforzar el poder de decisión de adolescentes y jóvenes entre los 13 y 20 años de edad en comunidades de mayor grado de vulnerabilidad en Colombia, mediante círculos de mujeres y círculos de hombres extracurriculares basado en un currículo de derechos sexuales y reproductivos con enfoque de género."
  });
  /*creamos un estado para el control de la visualización de los testimonios */
  const [testiomnyImg, setTestimonyImg] = useState({ cont: 1, img: first_testimony });
  //creamos una referencia hacia los nodos de los contenedores WH
  const whBox = useRef();
  /*funciones que permitirán setear el valor de title y content al ejecutarsen
  mediante el onClick de los WH-Buttons*/
  const btnWhoPoderosas = () => {
    setwhState({
      title: "¿Quienes Somos?",
      content: "Somos una ONG de Educación Integral para la Sexualidad (EIS) para reforzar el poder de decisión de adolescentes y jóvenes entre los 13 y 20 años de edad en comunidades de mayor grado de vulnerabilidad en Colombia, mediante círculos de mujeres y círculos de hombres extracurriculares basado en un currículo de derechos sexuales y reproductivos con enfoque de género."
    });
  }
  const btnWhatPoderosas = () => {
    setwhState({
      title: '¿Que es lo que Hacemos?',
      content:
        <ul className="list-content-wh-poderosas">
          <li className="content-wh-poderosas">1. Educamos en derechos sexuales y reproductivos.</li>
          <li className="content-wh-poderosas">2. Motivamos el autoconocimiento, autocuidado y valoración del cuerpo.</li>
          <li className="content-wh-poderosas">3. Facilitamos el reconocimiento y cuestionamiento de estereotipos de género.</li>
        </ul>
    });
  }
  const btnWhyPoderosas = () => {
    setwhState({
      title: '¿Por que lo hacemos?',
      content:
        <ul className="list-content-wh-poderosas">
          <li className="content-wh-poderosas">1/5 embarazadas son niñas menores de 19 años.</li>
          <li className="content-wh-poderosas">2/3 de esos embarazos son no deseados.</li>
          <li className="content-wh-poderosas">90% de las mujeres NO tienen información básica sobre la menstruación.</li>
          <li className="content-wh-poderosas">70% de las mujeres han sido víctimas de alguna manifestación de violencia por su pareja o ex pareja.</li>
        </ul>
    })
  }
  /* la presente función permitirá determinar la imagen del testimonio a mostrar*/
  const changeTestimonials = () => {
    if (testiomnyImg.cont === 1) {
      setTestimonyImg({ cont: 2, img: second_testimony });
    } else if (testiomnyImg.cont === 2) {
      setTestimonyImg({ cont: 3, img: third_testimony });
    } else if (testiomnyImg.cont === 3) {
      setTestimonyImg({ cont: 1, img: first_testimony });
    }
  }
  /* useEffect se ejecutará cada vez que nuestro componente sea renderizado*/
  useEffect(() => {
    let info_interval = setInterval(changeTestimonials, 5000);
    return () => {
      clearInterval(info_interval);
    }
  });
  return (
    <React.Fragment>
      <h2 className='main-title'>Somos poderosas</h2>
      <section className="section-info-poderosas">
        <div className="cont-info-poderosas cont-wh-poderosas">
          <button className="button-template button-who-poderosas" id="button-who-poderosas" onClick={btnWhoPoderosas}>¿Quienes <br></br> Somos?</button>
          <button className="button-template button-who-poderosas" id="button-what-poderosas" onClick={btnWhatPoderosas}>¿Qué es lo que Hacemos?</button>
          <button className="button-template button-who-poderosas" id="button-why-poderosas" onClick={btnWhyPoderosas}>¿Por qué lo Hacemos?</button>
          <div className="box-wh-poderosas" ref={whBox}>
            <h3 className="subtitle-wh-poderosas">{whState.title}</h3>
            <div className="content-wh-poderosas">{whState.content}</div>
            <figure className="box-icon-wh-poderosas">
              <img src={wh_img} className="icon-wh-poderosas" alt="Ilustración de una mujer que se ama a sí misma." />
            </figure>
          </div>
        </div>
        <div className="cont-imgs-team-poderosas">
          <div className="box-imgs-team-poderosas">
            <img src={poderosas_team} alt="Imagen del equipo poderoso" className="img-team-poderosas" />
          </div>
        </div>
        <div className="cont-info-poderosas cont-testimonials">
          <h3 className="subtitle-testimonials">Testimonios</h3>
          <figure className="box-imgs-testimonials">
            <img src={testiomnyImg.img} alt="Testimonios de las poderosas y poderosos" className="img-testimonials" />
          </figure>
        </div>
      </section>
    </React.Fragment>
  );
}
export default Info_poderosas;