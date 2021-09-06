import React, { useEffect, useState } from 'react';
import companies_array from '../../scripts/partner-companies/get_companies';
import '../../styles/partner_companies.css';
import Companie_img from './Companie_img';
const Parner_companies = () => {

  const [companies, setCompanies] = useState([]);

  /*ejecutamos la función que nos permite obtener las compañoas aliadas, estas
  se almaacenarán en el estado de companies */
  useEffect(async function () {
    setCompanies(await companies_array());
  }, []);

  return (
    <section className="partner-companies-section">
      <h2 className="main-title">Empresas Aliadas</h2>
      <div className="partner-companies">
        <div className="partner-companies-container">
          {companies.map((companie) => (
            <Companie_img
              url_img={companie.img_src}
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