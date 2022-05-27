import React from 'react';
import AboutUs from '../AboutUs';
import Banner from './Banner';
import Business from './BusinessSummery/Business';
import Newsletter from './Newsletter';
import Reviews from './Reviews';
import Tools from './ToolSection/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Business></Business>
            <AboutUs></AboutUs>
            <Newsletter></Newsletter>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;