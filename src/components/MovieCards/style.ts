import styled from "styled-components";

export const conteiner = styled.div`
    width: 30%;
    color: #fff;
    margin-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #111;
    padding: 1rem;

    img{
        max-width: 100%;
    }

    img, p, h2{
        margin-bottom: 1rem;
    }

    P > svg{
        color: ${({ theme }) => theme.color.yellow};
    }

    a {
        background-color: ${({ theme }) => theme.color.yellow};
        border: 2px solid ${({ theme }) => theme.color.yellow};
        border-radius: 4px;
        color: #000;
        padding: .3rem;
        font-size: 1rem .5rem;
        transition: all .4s;
        text-align: center;
        font-weight: bold;
    }

    a:hover{
        background-color: transparent;
        color: ${({ theme }) => theme.color.yellow};
    }
`;