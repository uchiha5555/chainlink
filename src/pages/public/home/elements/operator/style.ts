import styled from "styled-components";

export const NodeOperatorContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    background: #F5F7FD;
    width: 100%;
    height: 100%;
    z-index: 0;
`;

export const NodeOperatorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 230px 64px;
    max-width: 1440px;
    width: 100%;

    @media (max-width: 991px) {
        padding: 230px 32px;
    }

    @media (max-width: 768px) {
        padding: 230px 24px;
    }
`;

export const HeaderCaption = styled.div<{ align?: string }>`
    color: #555C6C;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    max-width: 700px;
    
    ${({ align }) => align && `text-align: ${align};`}

    @media (max-width: 991px) {
        max-width: 100%;
    }

    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const Subheader = styled.div`
    color: #1A2B6B;
    text-align: center;
    font-size: 14.875px;
    font-weight: 700;
    line-height: 24px; /* 161.345% */
`;

export const BrandContainer = styled.div`
    max-width: 864px;
    margin-bottom: 96px;
    margin-left: auto;
    margin-right: auto;
`;

export const ImageContainer = styled.div`
    @media (max-width: 991px) {
        margin-bottom: 2rem;
    }
`

export const TopRect = styled.div`
    position: absolute;
    top: -128px;
    left: 0;
    min-width: 100%;
    height: 200px;
    background: var(--white);
    transform: rotate(-4deg);
    z-index: -1;
`;

export const BottomRect = styled.div`
    position: absolute;
    bottom: -128px;
    left: 0;
    min-width: 100%;
    height: 200px;
    background: var(--white);
    transform: rotate(-4deg);
    z-index: -1;
`;

export const OperatorAction = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    &>* {
        :not(:last-child) {
            margin-right: 50px;

            @media (max-width: 479px) {
                margin-right: 0px;
                margin-bottom: 50px;
            }
        }
    }

    @media (max-width: 479px) {
        flex-direction: column;
    }
`