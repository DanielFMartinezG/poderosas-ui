import React from 'react';
import Hero_slider from '../components/Hero-slider/Hero-slider';
import News_slider from '../components/News-slider/News-slider';
import Parner_companies from '../components/Partner-companies/Partner_companies';
import Info_poderosas from '../components/Information-home/Info-home';

const Home = ()=>{
    return(
        <React.Fragment>
            <Hero_slider />
            <Info_poderosas />
            <News_slider />
            <Parner_companies />
        </React.Fragment>
    );
}
export default Home;