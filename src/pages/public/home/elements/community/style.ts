import styled from "styled-components";

export const CommunityContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 72px 0;
    z-index: 999;
`;

export const CommunityWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 72px;
    max-width: 1440px;
    padding: 0 64px 72px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 991px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (max-width: 768px) {
        padding-left: 24px;
        padding-right: 24px;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    padding: 49px 33px;
    height: 100%;
    min-height: 430px;
    border-radius: 8px;
    border: 1px solid #E7E8EA;
    background: #FFF;
    box-shadow: 0px 8px 40px -16px rgba(12, 22, 44, 0.32);
`;

export const Description = styled.div`
    color: #6D7380;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    max-width: 700px;
`;