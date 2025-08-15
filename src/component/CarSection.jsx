import React from 'react';

const CarSection = () => {
    return (
        <div className='roboto-serif-font md:px-8 px-4 mx-auto py-4 mb-10'>
            <h2 className="text-3xl md:text-4xl text-center font-semibold">
                The New Era of Cars
            </h2>
            <p className="text-center mt-2">Discover smart, stylish, and high-performance cars—all in one place. Find your perfect ride today.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                <div className="">1</div>
                <div className="">2</div>
                <div className="">3</div>
                <div className="">4</div>
            </div>
        </div>
    );
};

export default CarSection;