import styled from "styled-components";


export const Conteiner = styled.div`

`;

export const H2 = styled.h2<{boolean: boolean}>`
    color: #fff;
    font-size: 2.5rem;
    text-align: center;
    margin: 2rem 0 1rem;

    span{
        color: ${(props) => props.boolean ? props.theme.color.yellow : '#fff'};
    }
`;

export const ConteinerMovies = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
`;