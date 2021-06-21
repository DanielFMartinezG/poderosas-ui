import React from 'react';
import StaffCart from './StaffCart';
import get_staff from '../../scripts/staff/get_staff';
import '../../styles/staff.css'

const Staff = ()=>{
  let staff_array = get_staff();

  return(
    <section className='staff-section'>
      <h2 className='staff-title'>nuestro equipo</h2>
      <div className= 'staff-container'>
        {staff_array.map(element=>{
          return(
            <StaffCart
              img = {element.img}
              name = {element.name}
              position = {element.position}
            ></StaffCart>
          )
        })}
      </div>
    </section>
  );
}
export default Staff;