import React from 'react';
import './Pokemon.css'

export default function Pokemon ({ pokemon }) {
    return (
    <div className='carde'> 
        {pokemon.map(p => (
            <div className='card' key={p}>{p}</div>
        ))}
    </div>
    )
}
 