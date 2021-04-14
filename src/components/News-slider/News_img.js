import React from 'react'
let News_img = (props) =>{
  return(
    <div className="news_box">
      <div className="news_img_box">
        <img src={props.id_img} alt="hero img" className="news_img" />
      </div>
      <a href={props.url_new}
        className="link-news" target="_blank" 
      >
        <p className="news_title">{props.title_new}</p>
      </a>
    </div>
  );
}
export default News_img;