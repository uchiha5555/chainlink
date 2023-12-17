import styled from "styled-components";
import Background from '@/assets/img/choice-section.png';

export const ChoiceContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 32px;
    padding: 96px 0;
    width: 100%;
    background: url(${Background});
    background-size: cover;
    background-position: center;

    @media (max-width: 991px) {
        padding-left: 64px;
        padding-right: 64px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (max-width: 479px) {
        padding-left: 24px;
        padding-right: 24px;
    }
`;

export const ChoiceCard = styled.div`
    display: flex;
    gap: 24px;
    padding: 49px 33px;
    justify-content: center;
    align-items: flex-start;
    border-radius: 8px;
    border: 1px solid #E7E8EA;
    background: #FFF;
    box-shadow: 0px 8px 40px -16px rgba(12, 22, 44, 0.32);

    @media (max-width: 479px) {
        flex-direction: column;
        justify-content: flex-start;
    }
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 28px;
    border: 1px solid #DFE7FB;
    background: #F5F7FD;
    width: 56px;
    height: 56px;
`;

export const Description = styled.div`
    color: #6D7380;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    max-width: 220px;

    @media (max-width: 768px) {
        max-width: 100%;
    }
`;