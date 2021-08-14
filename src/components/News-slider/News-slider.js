import React, { useEffect, useState } from 'react';
import '../../styles/news_slider.css';
import News_img from './News_img';
import get_news from '../../scripts/news-slider/get_news'
import slide_news from '../../scripts/news-slider/slide_news'


let News_slider = () => {

  const [newsArray,setNewsArray] =  useState([]);

  useEffect(async function () {
    const news = await get_news();
    slide_news(news);
    setNewsArray(news);
  }, []);

  return (
    <section className="news-section" id="news-section">
      <h2 className="main-title">Poderosas en los medios</h2>
      <div className="news-slider-container">
        <div className="news-slider">
          {
            newsArray.map(news => (
              <News_img
                id_img={news.img_new_src}
                url_new={news.link_new}
                title_new={news.title_new}
                key={news.img_new_src}
              />
            ))
          }
          {
            newsArray.map(news => (
              <News_img
                id_img={news.img_new_src}
                url_new={news.link_new}
                title_new={news.title_new}
                key={news.img_new_src}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
}
export default News_slider;