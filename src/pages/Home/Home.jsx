import React from 'react';
import Banner from '../../component/Banner';
import AboutUs from '../../component/AboutUs';
import ChoseUs from '../../component/ChoseUs';
import OurClient from '../../component/OurClient';
import GoldenWaveSection from '../../component/GoldenWaveSection';
import Collaborate from '../../component/collaborate';
import CarSection from '../../component/carSection';


const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <AboutUs/>
            <ChoseUs/>
            <CarSection/>
            <OurClient/>
            <GoldenWaveSection/>
            <Collaborate/>
        </div>
    );
};

export default Home;