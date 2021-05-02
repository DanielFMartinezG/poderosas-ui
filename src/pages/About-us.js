import React from "react";
import AboutUs_Slider from "../components/AboutUs-slider/AboutUs-slider";
import Info_org from "../components/Info-org/Info_org";
import Origin from "../components/Origin/Origin";

const About_us = () => {
  return (
    <React.Fragment>
      <AboutUs_Slider />
      <Info_org />
      <Origin />
    </React.Fragment>
  );
};
export default About_us;
