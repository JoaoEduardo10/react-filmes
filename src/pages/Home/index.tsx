import { useState, useEffect } from "react"
import { TopMovie } from "../../components/TopMovies";

const movieUrl = "https://api.themoviedb.org/3/movie/"
const apiKei = "api_key=4e5016742c1bb52c071a9e508f7ea500"

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
