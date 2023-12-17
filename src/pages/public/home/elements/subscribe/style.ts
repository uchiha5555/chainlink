import styled from "styled-components";
import BackgroundImage from '@/assets/img/subscribe-bg.png';
import { GV } from "@/utils/style.util";

export const SubscribeContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 96px 111px;
    background: url(${BackgroundImage});
    background-position: center;
    background-size: cover;

    @media (max-width: 479px) {
        padding: 96px 24px;
    }
`;

export const SubscribeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
    max-width: 1440px;
`;

export const CustomInput = styled.input`
    height: 56px;
    padding: 18.5px 26px;
    border-radius: 4px;
    border: 2px solid #CED0D5;
    box-shadow: 0px 12px 32px -12px rgba(12, 22, 44, 0.32);
    color: #6D7380;
    font-size: 16px;
`;

export const Label = styled.span`
    font-size: 14px;
    color: #6D7380;
`;

export const CheckboxContainer = styled.div`
    width: 100%;
    
    @media (max-width: 479px) {
        display: none;
    }
`

export const MobileCheckboxContainer = styled.div`
    display: none;
    width: 100%;

    @media (max-width: 479px) {
        display: inline-block;
    }
`

export const CustomButton = styled.button`
    border-radius: 4px;
    border: 2px solid var(--primary);
    background: ${GV("white")};
    color: ${GV('primary')};
    box-shadow: 0px 12px 32px -12px rgba(12, 22, 44, 0.32);
    padding: 0 34px;
    height: 56px;
`;