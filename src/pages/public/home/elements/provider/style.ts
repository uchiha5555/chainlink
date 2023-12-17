import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const DataProviderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--white);
    padding: 73px 0 64px;
    width: 100%;
    height: 100%;
    z-index: 999;
`;

export const DataProviderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1440px;
    width: 100%;

    @media (max-width: 991px) {
        padding: 0 32px;
    }

    @media (max-width: 768px) {
        padding: 0 24px;
    }
`;

export const HeaderCaption = styled.div<{ align?: string }>`
    color: #6D7380;
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

export const ProviderCustomButton = styled.button`
    border-radius: 4px;
    border: 2px solid var(--primary);
    background: ${GV("white")};
    color: ${GV('primary')};
    box-shadow: 0px 12px 32px -12px rgba(12, 22, 44, 0.32);
    padding: 0 34px;
    height: 56px;

    @media (max-width: 479px) {
        width: 100%;
    }
`;