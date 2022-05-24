import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <div className="personal-info mx-16 ">
                <h1 className='text-4xl text-center font-bold my-16 '>Personal Information</h1>
                <h1 className='text-2xl'><strong>Name :</strong> Kaniz Fatema</h1>
                <p><strong>Email:</strong> kanizfatema0184@gmail.com</p>
                <p><strong>Github:</strong> https://github.com/Kanizfatema47</p>
                <p><strong>LinkedIn:</strong> https://www.linkedin.com/in/kaniz-fatema-292927164/</p>
            </div>
            <h1 className='text-4xl text-center font-bold my-16 '>Educational Information</h1>
            <div className="education-info justify-center items-center  grid lg:grid-cols-2 mx-24 gap-20 sm:grid-cols-1">
                <div className='card mr-5 w-full h-1/2   p-10 bg-base-100 shadow-xl'>
                    <h1 className='text-xl font-bold mb-3'>BSc in Computer Science and Engineering:</h1>
                    <p><strong>Institution :</strong> International Islamic University Chittagong</p>
                    <p><strong>Department :</strong> Computer Science and Engineering (CSE)</p>
                    <p><strong>Academic session :</strong> Spring 2016 - Autumn 2019</p>
                    <p><strong>Duration of Course :</strong> Four Years</p>
                    <p><strong>CGPA :</strong> 3.58 (out of 4.00)</p>

                </div>

               <div className='flex flex-col gap-y-10 justify-center items-center'>
               <div className='card w-full  mr-5 p-10 bg-base-100 shadow-xl'>
                    <h1 className='text-xl font-bold mb-3'>Secondary School Certificate:</h1>
                    <p><strong>Institution :</strong> Teriail High School, Chittagong</p>
                    <p><strong> Group :</strong> Science</p>
                    <p> <strong>Year of Passing :</strong> 2013</p>
                    <p><strong>GPA :</strong> 4.88</p>


                </div>

                <div className='card w-full mr-5 p-10 bg-base-100 shadow-xl'>
                    <p className='text-xl font-bold mb-3'>Higher Secondary Certificate:</p>
                    <p> <strong>Institution :</strong> Sitakund University College, Chittagong</p>
                    <p> <strong> Group :</strong> Science</p>
                    <p><strong>Year of Passing :</strong> 2015</p>
                    <p><strong>GPA :</strong> 3.92</p>
                </div>
               </div>

            </div>
            <div>
                <h1 className='text-4xl text-center font-bold my-16 '>My Projects</h1>
                <a href="http://"></a>
                <a href="http://"></a>
                <a href="http://"></a>
            </div>
            <div>
                <h1 className='text-4xl text-center font-bold my-16 '>My Skills</h1>
                <a href="http://"></a>
                <a href="http://"></a>
                <a href="http://"></a>
            </div>
        </div>
    );
};

export default Portfolio;