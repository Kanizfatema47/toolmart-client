import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools , setTools] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setTools(data))
    } ,[])
    return (
        <div className='my-24'>
            <h2 className='text-5xl text-center'>Tools</h2>
            <div className='grid lg:grid-cols-3 gap-6 md:grid-cols-2 gap-10 sm:grid-cols-1'>
                {
                    tools.map(tool => <Tool
                    key={tool.id}
                    tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;