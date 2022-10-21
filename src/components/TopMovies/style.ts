import styled from "styled-components";


export const Conteiner = styled.div`
    .carregando{
        position: absolute;
        left: 50%;
        top: 45%;
        transform: translate(-50%, -50%);
        width: 10%;
    }
    
    
    @media (max-width: 503px) {
        h2{
            font-size: 2rem;
        }
    }
`;

export const H2 = styled.h2<{boolean: boolean}>`
    color: #fff;
    font-size: 2.5rem;
    text-align: center;
    margin: 2rem 0 1rem;

    span{
        color: ${(props) => props.boolean ? props.theme.color.yellow : '#fff'};
    }


    @media (max-width: 503px) {
        padding: 0.5rem;
        font-size: 1rem;
    }
`;

export const ConteinerMovies = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 751px) {
        flex: auto;
        flex-direction: column;
        align-items: center;
    }
`;
