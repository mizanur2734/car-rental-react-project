import React from 'react';
import Banner from '../../component/banner';
import AboutUs from '../../component/AboutUs';
import ChoseUs from '../../component/ChoseUs';
import OurClient from '../../component/OurClient';
import GoldenWaveSection from '../../component/GoldenWaveSection';
import Collaborate from '../../component/collaborate';

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <AboutUs/>
            <ChoseUs/>
            <OurClient/>
            <GoldenWaveSection/>
            <Collaborate/>
        </div>
    );
};

export default Home;