import React, { useEffect, useState } from 'react';

const useToolsDetails = (id) => {
    const [toolDetails , setToolDetails] = useState({})
    useEffect(()=>{
        fetch(`https://frozen-peak-31960.herokuapp.com/toolDetails/${id}`)
        .then(res=> res.json())
        .then(data => setToolDetails(data))
    } ,[])
    return [toolDetails, setToolDetails];
};

export default useToolsDetails;