import styled from "styled-components";

export const StyledMain = styled.main`
    margin: 0 auto;
    max-width: 1380px;

    display: flex;
    justify-content: space-between;

    @media (max-width: 1400px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`