import * as S from './style';

import { ApiProp } from '../../types/types'; 
import { MoviesCards } from '../MovieCards';

import carregando from '../../img/gifcarregamento.gif';

type TopMoviesProps = {
    TopMovies: ApiProp[],
    text?: string,
    boolean?: boolean,
    query?: string | null
}

export const TopMovie = ({ TopMovies, query, text = 'Melhores Filmes: ', boolean = false }: TopMoviesProps) => {
    return (
        <S.Conteiner>
            <img src="" alt="" />
            <S.H2 boolean={boolean}>{text} <span>{boolean && query}</span> </S.H2>
            <S.ConteinerMovies>
                {TopMovies.length === 0 && <img className='carregando' src={carregando}></img>}
                {TopMovies.length > 0 && TopMovies.map((movie) => <MoviesCards key={movie.id} movie={movie} />)}
            </S.ConteinerMovies>
        </S.Conteiner>
    )
}