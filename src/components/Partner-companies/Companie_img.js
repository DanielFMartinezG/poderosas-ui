import React from 'react';
let Companie_img =(props) =>{
  return(
    <div className="partner-companies-logo">
      <img className="partner-companies-img" 
        src={props.url_img} 
        alt="logo Sara y Flora"
      />
    </div>    
  )
};
export default Companie_img;