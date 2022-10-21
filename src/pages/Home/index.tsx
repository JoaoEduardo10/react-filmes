import { useState, useEffect } from "react"
import { TopMovie } from "../../components/TopMovies";

const movieUrl = import.meta.env.VITE_API
const apiKei = import.meta.env.VITE_API_KEY

import { ApiProp } from '../../types/types'

const  Home = () => {
  const [topMovie, setTopMovie] = useState<ApiProp[]>([])

  const getTopMovie = async (url: string) => {
    
    const resp = await fetch(url)
    const data = await resp.json()

    setTopMovie(data.results)

  }
  
  useEffect(() => {

    const topMovieUrl = `${movieUrl}top_rated?${apiKei}`

    getTopMovie(topMovieUrl)

  }, [])

  return (
    <div>
      <TopMovie TopMovies={topMovie} />
    </div>
  )
}

export default Home
