import React from 'react';
import img1 from '../../../assets/images/worker.png'
import img2 from '../../../assets/images/award.png'
import img3 from '../../../assets/images/employee.png'
import img4 from '../../../assets/images/work.png'
import bg from '../../../assets/images/image2.jpg';
const Business = () => {
    return (
        <div className=" mx-auto  text-center hero lg:min-w-screen h-[400px]  sm:w-full h-auto" style={{ backgroundImage: `url(${bg})` }}>
            <div className='hero-overlay bg-opacity-90'>
            <h1 className='text-5xl text-center mt-24 text-white pb-16'>Why Choose Us?</h1>
            <div class=" bg-transparent mb-12 grid lg:grid-cols-4 sm:grid-cols-1 justify-center items-center">

                <div class="stat text-white">
                    <div class="stat-figure text-white">

                        <div class="w-16">
                            <img src={img1} alt=''></img>
                        </div>

                    </div>
                    <div class="stat-value">59</div>
                    <div class="stat-title">Professional Workers</div>
                </div>

                <div class="stat text-white">
                    <div class="stat-figure text-secondary">

                        <div class="w-16">
                            <img src={img2} alt=''></img>
                        </div>
                    </div>
                    <div class="stat-value">36</div>
                    <div class="stat-title">Award Won</div>
                </div>

                <div class="stat text-white">
                    <div class="stat-figure text-secondary">

                        <div class="w-16 ">
                            <img src={img3} alt=''></img>
                        </div>

                    </div>
                    <div class="stat-value">99</div>
                    <div class="stat-title">Work Employeed</div>
                </div>
                <div class="stat text-white">
                    <div class="stat-figure">

                        <div class="w-16">
                            <img src={img4} alt=''></img>
                        </div>

                    </div>
                    <div class="stat-value">90</div>
                    <div class="stat-title">Tasks Completed</div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default Business;