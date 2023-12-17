import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const HeroContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    z-index: 0;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #DFE7FB;
`;

export const HeroWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    width: 100%;
    padding: 120px 64px;
    z-index: 0;

    @media (max-width: 996px) {
        padding: 120px 32px;
    }
`;

export const BackgroundImage = styled.img`
    position: absolute;
    top: 88px;
    right: 0;
    height: 550px;
    width: 1500px;
    z-index: -1;

    @media (max-width: 996px) {
        display: none;
    }
`;

export const MobileBackgroundImage = styled.img`
    position: absolute;
    top: 88px;
    left: 65%;
    display: none;
    height: 100%;
    width: auto;
    max-width: none;
    margin-left: -720px;
    z-index: -1;

    @media (max-width: 996px) {
        display: block;
    }

    @media (max-width: 768px) {
        margin-left: -800px;
    }

    @media (max-width: 479px) {
        margin-left: -720px;
    }
`;

export const Rect = styled.div`
    position: absolute;
    top: 88px;
    left: 0;
    width: 20%;
    height: 100%;
    background: #DFE7FB;
    z-index: -1;
    @media (max-width: 996px) {
        display: none;
    }
`;

export const HeroCaption = styled.div`
    color: #3d4556;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
`;

export const HeroCustomButton = styled.button<{ bg: string }>`
    border-radius: 4px;
    border: 2px solid var(--primary);
    ${({ bg }) => bg === 'first' ? `background: ${GV('primary')};` : `background: ${GV("white")};`}
    ${({ bg }) => bg === 'first' ? `color: ${GV('white')};` : `color: ${GV('primary')};`}
    box-shadow: 0px 12px 32px -12px rgba(12, 22, 44, 0.32);
    padding: 0 34px;
    height: 56px;

    @media (max-width: 479px) {
        width: 100%;
    }
`