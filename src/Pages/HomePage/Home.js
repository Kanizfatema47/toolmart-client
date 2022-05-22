import React from 'react';
import Banner from './Banner';
import Business from './BusinessSummery/Business';
import Reviews from './Reviews';
import Tools from './ToolSection/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Business></Business>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;