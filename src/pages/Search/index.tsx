import { useState, useEffect } from "react"

import { useSearchParams } from "react-router-dom"

import { TopMovie } from '../../components/TopMovies'
import { ApiProp } from '../../types/types'

const searchUrl = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY


export const Search = () => {
    const [movies, setMovies] = useState<ApiProp[]>([])
    const [searchParams] = useSearchParams()
    const query: string | null = searchParams.get('q')

    const getSearchMovie = async (url: string) => {
    
        const resp = await fetch(url)
        const data = await resp.json()
    
        setMovies(data.results)
    
      }
      
      useEffect(() => {
    
        const searchOfUrl = `${searchUrl}?${apiKey}&query=${query}`
    
        getSearchMovie(searchOfUrl)
    
      }, [query])

    

    return <TopMovie TopMovies={movies} text={`Resultados para: `} query={query} boolean={true} />
}