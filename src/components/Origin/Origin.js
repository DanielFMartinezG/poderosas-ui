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

  return (
    <section className="section-origin">
      <h2 className="main-title">POR QUÉ Y ORIGEN</h2>
      <div className="text-container">
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
      className="text-properties"
      style={{ background: background_color, color: color }}
    >
      <h4
        data-aos="fade-up"
        className="text-title"
        style={{ color: font_color }}
      >
        {title}
      </h4>
      <div className="text-paragraph">{parragraph}</div>
      <div className="img-container">
        <img src={img_pod_veamos} className="img" alt="" />
      </div>
    </div>
  );
};

export default Origin;

//
