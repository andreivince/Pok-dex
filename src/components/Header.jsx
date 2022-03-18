import React from 'react';
import './Header.css'
import { CgPokemon } from 'react-icons/cg' /* The "/fi" is the first letter of icon*/

const Header = () => {
    return ( 
        <div>
            <header>
            <h1 className='titulo'> <CgPokemon/> Pokédex</h1>
            </header>
        </div>
     );
}
 
export default Header;