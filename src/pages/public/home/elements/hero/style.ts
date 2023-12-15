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
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    width: 100%;
    margin: 120px 0;
    padding: 0 64px;
`;

export const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    left: 140px;
    height: 550px;
    width: 1500px;
    z-index: -1;
`;

export const Rect = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 510px;
    height: 550px;
    background: #DFE7FB;
    z-index: -1;
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
`