import React from "react";
import "../../styles/info_org.css";
import img_pod_azul from "../../assets/img-pictures/poderosa-info-org-azul.svg";
import img_pod_fucsia from "../../assets/img-pictures/poderosa-info-org-fucsia.svg";
import img_pod_verde from "../../assets/img-pictures/poderosa-info-org-verde.svg";
import img_pod_amarillo from "../../assets/img-pictures/poderosa-info-org-amarillo.svg";
import show_vision from "../../scripts/info-org/show_vision";
import show_mision from "../../scripts/info-org/show_mision";
import show_values from "../../scripts/info-org/show_values";

const Info_org = () => {
  return (
    <section className="section-info-org">
      <button
        className="button-info-org"
        id="button-mision"
        onClick={show_mision}
      >
        Misión
      </button>
      <button
        className="button-info-org"
        id="button-vision"
        onClick={show_vision}
      >
        visión
      </button>
      <button
        className="button-info-org"
        id="button-valores"
        onClick={show_values}
      >
        valores
      </button>
      <div className="container-info-org">
        <figure className="box-img-inicial-info-org" id="box-img-inicial">
          <img className="img-inicial-info-org" src={img_pod_azul} alt="" />
        </figure>
        <div className="div-info-org container-mision">
          <figure className="box-img-info-org">
            <img className="img-info-org" src={img_pod_fucsia} alt="" />
          </figure>
          <div className="box-text-info-org">
            <h3 className="title-info-org">Nuestra Misión</h3>
            <p className="text-info-org">
              PODEROSAS es una ONG de Educación Integral para la Sexualidad
              (EIS) con el compromiso de reforzar el poder de decisión de
              adolescentes y jóvenes entre los 13 y 20 años de edad en
              comunidades de mayor grado de vulnerabilidad en Colombia, mediante
              círculos extracurriculares basado en un currículo de derechos
              sexuales y reproductivos con enfoque de género.
            </p>
          </div>
        </div>
        <div className="div-info-org container-vision">
          <figure className="box-img-info-org">
            <img className="img-info-org" src={img_pod_verde} alt="" />
          </figure>
          <div className="box-text-info-org">
            <h3 className="title-info-org">Nuestra Visión</h3>
            <p className="text-info-org">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              similique minima, repellendus unde ratione beatae tempora aliquid
              cumque omnis ut voluptas autem, fuga excepturi temporibus delectus
              vitae numquam labore corporis.
            </p>
          </div>
        </div>
        <div className="div-info-org container-valores">
          <figure className="box-img-info-org">
            <img className="img-info-org" src={img_pod_amarillo} alt="" />
          </figure>
          <div className="box-text-info-org">
            <h3 className="title-info-org">Nuestros valores</h3>
            <ul>
              <li>Empoderamiento</li>
              <li>Empoderamiento</li>
              <li>Empoderamiento</li>
              <li>Empoderamiento</li>
              <li>Empoderamiento</li>
              <li>Empoderamiento</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Info_org;
