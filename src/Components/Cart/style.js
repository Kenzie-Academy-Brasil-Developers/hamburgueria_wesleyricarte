import styled from "styled-components";

export const StyledAside = styled.aside`
    margin-top: 26px;
    width: 365px;
    max-height: 530px;

    background-color: var(--grey-0);
    border-radius: 0px 0px 5px 5px;

    position: relative;

    @media (max-width: 1400px) {
        margin-top: 2rem;

        margin: 0 auto;
        height: 530px;
        width: 365px;
    }

    & > header {
        display: flex;
        align-items: center;

        width: 100%;
        height: 65px;
        padding: 0 20px;

        background-color: var(--color-primary);
        color: white;
        border-radius: 5px 5px 0px 0px;
    }

    & > div {
        position: absolute;
        bottom: 0;
    }
`

export const StyledAsideEmpty = styled.aside`
    margin-top: 26px;
    width: 27%;
    max-width: 365px;
    max-height: 223px;

    background-color: var(--grey-0);
    border-radius: 0px 0px 5px 5px;

    & > header {
        display: flex;
        align-items: center;

        width: 100%;
        height: 65px;
        padding: 0 20px;

        background-color: var(--color-primary);
        color: white;
        border-radius: 5px 5px 0px 0px;
    }
`