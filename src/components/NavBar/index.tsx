import { Link, useNavigate } from 'react-router-dom'
import * as S from './style'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'; 
import { useState } from 'react';

export const NavBar = () => {
    const [search, setSearch] = useState<string>("")
    const navegate = useNavigate()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        if(!search){
            alert('Digite algun nome')
            return;
        }

        navegate(`/search?q=${search}`)
        setSearch('')
    }

    return (
        <>
            <S.NavBar>
                <h2>
                    <Link to={'/'}> <BiCameraMovie /> MovieLib</Link>
                </h2>
                <S.Form onSubmit={handleSubmit}>
                    <S.Input 
                        type={'text'} 
                        placeholder={'Busque um filme'} 
                        onChange={({ target }) => setSearch(target.value)}
                        value={search}
                    />
                    <S.Button type={'submit'}>
                    <BiSearchAlt2 />
                    </S.Button>
                </S.Form>
            </S.NavBar>
        </>
    )
}