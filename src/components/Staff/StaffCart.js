import React from 'react';
const StaffCart = (props)=>{
  return(
    <div className='staff-cart-box'>
      <img
        src={props.img}
        className='staff-cart-img'
      ></img>
      <p className='staff-cart-name'>{props.name}</p>
      <p className='staff-cart-position'>{props.position}</p>
    </div>
  );
}
export default StaffCart;