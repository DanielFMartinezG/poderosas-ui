import React from 'react';
let Companie_img =(props) =>{
  return(
    <div className="empresasAliadas__logo">
      <img className="empresasAliadas__img" 
        src={props.url_img} 
        alt="logo Sara y Flora"
      />
    </div>    
  )
};
export default Companie_img;