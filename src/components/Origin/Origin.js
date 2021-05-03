import "../../styles/origin.css";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import info_origin from "./Text";
import img_pod_veamos from "../../assets/img-pictures/poderosas-origin-veamos.png";

const Origin = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  console.log(info_origin);

  return (
    <section className="section-origin">
      <h2 className="origin_section_title">POR QUÉ Y ORIGEN</h2>
      <div className="text_container">
        {info_origin.map((info) => (
          <Info
            key={info.id}
            title={info.title}
            parragraph={info.parragraph}
            background_color={info.background_color}
            color={info.color}
            font_color={info.font_color}
          />
        ))}
      </div>
    </section>
  );
};

const Info = ({ title, parragraph, background_color, color, font_color }) => {
  return (
    <div
      data-aos="fade-up"
      className="text_properties"
      style={{ background: background_color, color: color }}
    >
      <h4
        data-aos="fade-up"
        className="text_title"
        style={{ color: font_color }}
      >
        {title}
      </h4>
      <p className="text_paragraph">{parragraph}</p>
      <div className="img_container">
        <img src={img_pod_veamos} className="img" alt="" />
      </div>
    </div>  
  );
};

export default Origin;

//
