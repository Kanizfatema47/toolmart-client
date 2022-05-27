import React from 'react';
import banner from '../../assets/images/image3.jpg'
const Banner = () => {
    return (
        <div className='w-full'>
            <div class="hero min-h-screen " style={{ backgroundImage: `url(${banner})` }}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-3xl uppercase">Welcome</h1>
                        <p class="mb-5 text-5xl font-bold leading-sung">Quality Tools On Your Demand</p>
                        <button class="btn btn-primary">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Banner;