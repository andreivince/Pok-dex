import React from 'react';

const PokemonLayout = ({NextPagee, PrevPagee}) => {
    return ( 
        <div>
            {PrevPagee && <button onClick={PrevPagee}>Voltar</button>}
            {NextPagee && <button onClick={NextPagee}>Avançar</button>}
        </div>
     );
}
 
export default PokemonLayout;