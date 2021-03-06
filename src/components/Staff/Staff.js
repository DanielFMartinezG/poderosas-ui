import React, { useState, useEffect } from 'react'
import StaffCart from './StaffCart';
import getStaff from '../../scripts/staff/get_staff';
import '../../styles/staff.css'

const Staff = () => {

  const [staffArray, setStaffArray] = useState([]);

  /*obtenemos el staff al cargar el componente, solo lo ejecutamos
  la primera vez que se monta el componente y lo asignamos a su estado respectivo */
  useEffect(async function () {
    const response = await getStaff();
    setStaffArray(response);
  }, []);

  return (
    <section className='staff-section'>
      <h2 className='main-title'>nuestro equipo</h2>
      <div className='staff-container'>
        {staffArray.map(element => {
          return (
            <StaffCart
              img={element.img}
              name={element.name}
              position={element.position}
              key={element._id}
            ></StaffCart>
          )
        })}
      </div>
    </section>
  );
}
export default Staff;