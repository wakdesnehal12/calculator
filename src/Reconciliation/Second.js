import React, { useEffect } from 'react';
import { useState } from 'react';
import Third from './Third';

export default function Second() {  
    const data = {label : true}
    const [firstData, setFirstData] = useState(data);

    useEffect(() => {
        console.log('Label Wrapper Created');
       
        setInterval(() => {
            setFirstData({label: ! firstData.label});
        }, 3000)

    }, [])
  return (
    <div>
        {
            firstData.label ? (
                <p title={`${firstData.label}`}>
                    <Third></Third>
                </p>
            ) : (
                <div title={`${firstData.label}`}>
                    <Third></Third>
                </div>
            )
        }
    </div>
  )
}
