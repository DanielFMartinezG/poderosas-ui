import React from 'react';
import Hero_slider from '../components/Hero-slider/Hero-slider';
import Map from '../components/Map/Map';
import News_slider from '../components/News-slider/News-slider';
import Parner_companies from '../components/Partner-companies/Partner_companies';

const Home = ()=>{
    return(
        <React.Fragment>
            <Hero_slider />
            <Map />
            <News_slider />
            <Parner_companies />
        </React.Fragment>
    );
}
export default Home;