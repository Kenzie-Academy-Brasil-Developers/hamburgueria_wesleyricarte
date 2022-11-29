import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    height: 142px;
    padding: 20px 10px;

    border-top: 2px solid var(--grey-20);

    & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    & > button {
        width: 100%;
        height: 60px;

        background-color: var(--grey-20);
        border: 2px solid var(--grey-20);
        color: var(--grey-50);
        border-radius: 8px;

        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
    }
    & > button:hover {
        background-color: var(--grey-50);
        color: var(--grey-20);
    }
`

export const StyledDivEmpty = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 158px;

    
    h3 {
        color: var(--grey-100);
        font-size: 18px;
        font-weight: 700;
    }

    h5 {
        color: var(--grey-50);
        font-size: 14px;
        font-weight: 400;
    }
`