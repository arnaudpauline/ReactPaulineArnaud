import styled from "@emotion/styled"

const Cliquable = styled.div`
    display:flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;

    cursor: ${({ onClick }) => onClick ? "pointer" : "initial"};
    border-radius: 0.25rem;
    transition: background-color 0.2s ease-in-out;

    &:hover{
        background-color: #b0b0b0;
    }
    `

export default Cliquable;