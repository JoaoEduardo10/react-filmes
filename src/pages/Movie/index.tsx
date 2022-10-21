import * as S from './style'; 

import { useState, useEffect } from "react"

import { useParams } from "react-router-dom"

import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFileEarmarkTextFill } from 'react-icons/bs'

import { MoviesCards } from '../../components/MovieCards';

import { ApiProp } from '../../types/types'

const movieUrl = "https://api.themoviedb.org/3/movie/"
const apiKei = "api_key=4e5016742c1bb52c071a9e508f7ea500"

const formatCurrent = (num: number): string => {
    return num.toLocaleString("es-US", {
        style: 'currency',
        currency: 'USD',
    })
}


export const Movie = () => {
    const { id } = useParams()

    const [movie, setMovie] = useState<ApiProp>()


    const getMovie = async (url: string) => {
    
        const resp = await fetch(url)
        const data = await resp.json()
    
        setMovie(data)
    
      }
      
      useEffect(() => {
    
        const topMovieUrl = `${movieUrl}${id}?${apiKei}`
    
        getMovie(topMovieUrl)
    
      }, [])


    return (
        <S.Conteiner>
            {movie && 
            <>
                <MoviesCards movie={movie} showLink={false} />
                <S.TagLine className='tegline'>{movie.tagline}</S.TagLine>
                <S.Info>
                    <h3>
                        <BsWallet2 /> Orçamento:
                    </h3>
                    <p>{formatCurrent(movie.budget)}</p>
                </S.Info>
                <S.Info>
                    <h3>
                        <BsGraphUp /> Receita:
                    </h3>
                    <p>{formatCurrent(movie.revenue)}</p>
                </S.Info>
                <S.Info>
                    <h3>
                        <BsHourglassSplit /> Duração:
                    </h3>
                    <p>{movie.runtime} minutos</p>
                </S.Info>
                <S.Info>
                    <h3>
                        <BsFileEarmarkTextFill /> Descrição
                    </h3>
                    <p>{movie.overview}</p>
                </S.Info>
            </>}
        </S.Conteiner>
    )
}