import { useState, useEffect } from "react"

import { useSearchParams } from "react-router-dom"

import { TopMovie } from '../../components/TopMovies'
import { ApiProp } from '../../types/types'

const searchUrl = "https://api.themoviedb.org/3/search/movie/"
const apiKey = "api_key=4e5016742c1bb52c071a9e508f7ea500"


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