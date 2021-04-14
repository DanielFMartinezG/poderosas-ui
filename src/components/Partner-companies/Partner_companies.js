import React from 'react';
import companies_array from '../../scripts/partner-companies/get_companies';
import '../../styles/partner_companies.css';
import Companie_img from './Companie_img';
const Parner_companies = () =>{
  const companies_imgs = companies_array();
  return(
    <section className="empresasAliadas__section">
      <h2 className="empresasAliadas_title">Empresas Aliadas</h2>
      <div className="empresasAliadas">
        <div className="empresasAliadas__container">
          {companies_imgs.map((companie)=>(
            <Companie_img 
              url_img = {companie.img_src}
              key={companie.companie_name.replace(/\s+/g, '')}
            />
          ))
        }
        </div>
      </div>
    </section>
  );
}
export default Parner_companies;