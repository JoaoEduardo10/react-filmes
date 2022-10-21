import * as S from './style'

import { Link } from 'react-router-dom'

import { FaStar } from "react-icons/fa";
import { ApiProp } from '../../types/types';

const imageUrl = "https://image.tmdb.org/t/p/w500/"

type MoviesCardsProps = {
    movie: ApiProp,
    showLink?: boolean
}

export const MoviesCards = ({ movie, showLink = true }: MoviesCardsProps) => {
    return (
        <S.conteiner className='movie-card'>
            <img src={imageUrl + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>
                <FaStar /> {movie.vote_average}
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </S.conteiner>
    )
}