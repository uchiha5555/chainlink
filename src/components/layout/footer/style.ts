import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 120px 64px;
    width: 100%;
    height: 100%;
    background: #252E42;
    z-index: 999;

    @media (max-width: 991px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (max-width: 768px) {
        padding-left: 24px;
        padding-right: 24px;
    }
`;

export const FooterWrapper = styled.div`
    max-width: 1204px;
`;

export const CopyrightContainer = styled.div`
    display: flex;
    justify-content: center;
    background: #0C162C;
    padding: 40px 64px;

    @media (max-width: 991px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (max-width: 768px) {
        padding-left: 24px;
        padding-right: 24px;
    }
`;

export const CopyrightWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1300px;
    width: 100%;
`;

export const CopyrightFont = styled.div`
    font-size: 14px;
    color: #858A95;
`