import React, { useEffect, useState } from 'react';
import Pokemon from './Pokemon'
import axios from 'axios'
import PokemonLayout from "./PokemonLayout"
import "./PokemonPage.css"

const PokemonPage = () => {
    const [pokemon, setPokemon] = useState([])
    const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPage, setNextPage] = useState()
    const [prevPage, setPrevPage] = useState()
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        setLoading(true)
        let cancel
        axios.get(currentPage, {cancelToken: new axios.CancelToken(c => cancel = c)}).then(res => {
            setLoading(false)
            setNextPage(res.data.next)
            setPrevPage(res.data.previous)
            setPokemon(res.data.results.map(p => p.name))
        })    

        return () => cancel()

    }, [currentPage])

    function NextPagee() {
        setCurrentPage(nextPage)
    }

    function PrevPagee() {
        setCurrentPage(prevPage)
    }

    if (loading) return "Loading..."

    return ( 
        <div className='containerr'>
        <Pokemon pokemon={pokemon} />
        <PokemonLayout 
        PrevPagee={prevPage ? PrevPagee : null}
        NextPagee={nextPage ? NextPagee : null}/>
        </div>
     );
}


 
export default PokemonPage;