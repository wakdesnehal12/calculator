import React from 'react';
import { useState } from 'react';
import Second from './Second';

export default function First() {
    // let count = 1
    const obj = [
        {name: "AAA", id: 1},
        {name: "BBB", id: 2},
        {name: "BBB", id: 3}
    ]    
    const [items, setItems] = useState(obj);
    
    const handle = () => {
        // console.log('click')
        setItems([{name: 'snehal'}, ...items])
    }
  return (
    <div>
        <Second/>
        <ul>
            {
                items.map((item) => {
                    return <li key={item.id}>{item.name}</li>
                } )
            } 
        </ul>
        <button type='submit' onClick={handle}>ADD ITEM</button>

    </div>
  )
}
