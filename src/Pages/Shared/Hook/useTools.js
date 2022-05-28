import React, { useEffect, useState } from 'react';

const useTools = () => {
    const [tools , setTools] = useState([])
    useEffect(()=>{
        fetch('https://frozen-peak-31960.herokuapp.com/tools')
        .then(res=> res.json())
        .then(data => setTools(data))
    } ,[])
    return [tools, setTools];
};

export default useTools;