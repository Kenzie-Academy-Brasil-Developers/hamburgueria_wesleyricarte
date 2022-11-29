import styled from "styled-components"

export const StyledInput = styled.input`
    height: 40px;

    border: none;
    outline: none;

    width: 100%;

    &:focus {
        outline: none;
    }
`
export const StyledDiv = styled.div`
    display: flex;
    align-items: center;

    width: 365px;
    height: 60px;
    padding: 10px;

    background-color: #FFFFFF;
    border: solid 2px var(--grey-20);
    border-radius: 8px;

    @media (max-width: 380px) {
        width: 300px;
    }
`