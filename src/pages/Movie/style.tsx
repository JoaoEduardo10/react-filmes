import styled from "styled-components";


export const Conteiner = styled.div`
    margin: 0;
    padding: 0;
    color: #fff;
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 2rem auto;

    .movie-card{
        background-color: transparent;
        margin: 0;
        width: 70%;
        text-align: center;
    }

    .movie-card img,
    .movie-card h2,
    .movie-card p {
        margin-bottom: 1rem;
    }

    .movie-card h2{
        font-size: 2rem;
    }

    .movie-card p {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4rem;
    }

    svg{
        font-size: 1.5rem;
        color: ${({ theme }) => theme.color.yellow};
    }

    img{
        width: 100%;
    } 

    @media (max-width: 1075px) {
        justify-content: center;
    
        .movie-card{
            margin: 0 auto;

        }

    }
`;

export const TagLine = styled.p`
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 2rem;
`;

export const Info = styled.div`
    margin-bottom: 1.5rem;

    h3{
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: .5rem;
    }

    p{
        line-height: 1.4rem;
    }

    @media (max-width: 1075px) {
        padding-left: 1rem;
        
        p{
            font-size: 1rem;
            padding: 0rem 1rem;
        }
    }
`;