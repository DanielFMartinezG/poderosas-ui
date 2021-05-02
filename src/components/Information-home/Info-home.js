import React from 'react';
import '../../styles/info_home.css';
import pod_uraba from '../../assets/img-logos/poderosas-uraba.jpg'
import poderosas_team from '../../assets/img-logos/equipo-poderoso.jpg';
import first_testimony from '../../assets/img-logos/testimonio1.jpeg'

const Info_poderosas = ()=>{
  return (
    <section className="section-info-poderosas">
      <div className="cont-info-poderosas cont-wh-poderosas">
        <button className="button-poderosas button-who-poderosas" id="button-who-poderosas">¿Quienes Somos?</button>
        <button className="button-poderosas button-what-poderosas" id="button-what-poderosas">¿Qué es lo que Hacemos?</button>
        <button className="button-poderosas button-why-poderosas" id="button-why-poderosas">¿Por qué lo Hacemos?</button>
        <div className="box-wh-poderosas">
        </div>
        <figure className="box-img-main-wh-poderosas">
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
          <img src={first_testimony} alt="Testimonios de las poderosas y poderosos" className="img-testimonials"/>
        </figure>
      </div>
    </section>
  );
}
export default Info_poderosas;