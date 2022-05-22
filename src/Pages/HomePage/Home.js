import React from 'react';
import Banner from './Banner';
import Business from './BusinessSummery/Business';
import Tools from './ToolSection/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Business></Business>
        </div>
    );
};

export default Home;