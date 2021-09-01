import React, { useEffect, useState } from 'react';
import FormSliderHome from '../components/Admin/Slider-Home-Form/FormSliderHome';
import FormMap from '../components/Admin/Map/FormMap';
import NewsForm from '../components/Admin/News/NewsForm';
import PartnersForm from '../components/Admin/partners/partnersForm';
import SliderAboutUsForm from '../components/Admin/Slider-abotUs/SlideAboutUsForm';
import StaffForm from '../components/Admin/Staff/StaffForm';

const HomeAdmin = () => {

  const path = 'http://localhost:3000';
  const [showPage, setShowPage] = useState(false);

  useEffect(async function () {
    const token = localStorage.getItem('admin');
    if (token != null) {
      const response = await fetch(`${path}/validateToken/${token}`);
      if (response.status) {
        setShowPage(true);
      }
    }
  });

  return (
    <React.Fragment>
      <p className='main-title'>Poderosas <br></br>Administrador</p>

      {showPage ?
        <section className='body-section'>
          <FormSliderHome />
          <FormMap />
          <NewsForm />
          <PartnersForm />
          <SliderAboutUsForm />
          <StaffForm />
        </section>
        : null
      }
    </React.Fragment>
  );
}
export default HomeAdmin;