import styled from "styled-components";

export const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #121212;

    h2 a{
        display: flex;
        align-items: center;
        gap: .5rem;
    }
`;

export const Form = styled.form`
    display: flex;
    gap: .5rem;
`;

export const Input = styled.input`
    padding: .2rem .8rem;
    border-radius: 4px;
    border: none;
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.yellow};
    border: 2px solid ${({ theme }) => theme.color.yellow};
    border-radius: 4px;
    color: #000;
    padding: .3rem;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all .4s;


    &:hover{
        background-color: transparent;
        color: ${({ theme }) => theme.color.yellow};
    }
`;