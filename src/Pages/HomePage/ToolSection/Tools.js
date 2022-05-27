import React, { useEffect, useState } from 'react';
import useTools from '../../Shared/Hook/useTools';
import Tool from './Tool';

const Tools = () => {
const [tools, setTools]= useTools();
console.log(tools)
    return (
        <div className='my-24 lg:mx-16 sm:mx-6'>
            <h2 className='text-5xl text-center'>Tools</h2>
            <div className='grid lg:grid-cols-3 gap-5 md:grid-cols-2 gap-8 sm:grid-cols-1'>
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