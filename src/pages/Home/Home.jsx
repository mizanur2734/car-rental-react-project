import React from 'react';
import Banner from '../../component/banner';
import AboutUs from '../../component/AboutUs';

const Home = () => {
    return (
        <div className='md:px-8 px-4 mx-auto py-4'>
            <Banner/>
            <AboutUs/>
        </div>
    );
};

export default Home;