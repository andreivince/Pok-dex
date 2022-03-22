import React from 'react';
import './PokemonLayout.css'

const PokemonLayout = ({NextPagee, PrevPagee}) => {
    return ( 
        <div className='botao'>
            {PrevPagee && <button onClick={PrevPagee} className="back">Voltar</button>}
            {NextPagee && <button onClick={NextPagee} className="top">Avançar</button>}
        </div>
     );
}
 
export default PokemonLayout;