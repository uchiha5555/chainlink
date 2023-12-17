import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const HeaderContainer = styled.header<{ isTop?: boolean }>`
  position: fixed;
  /* ${({ isTop }) =>
    !isTop
      ? `position: fixed;`
      : `position: absolute;`} */
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white);
  width: 100%;
  min-height: 88px;
  z-index: 9999;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  max-width: 1440px;
  width: 100%;
  height: 100%;
`;

export const HeaderCustomButton = styled.button`
  border: 2px solid #375BD2;
  border-radius: 0.25rem;
  box-shadow: 0px 12px 32px -12px rgba(12, 22, 44, 0.32);
  color: var(--primary);
  font-weight: ${GV('weight-md')};
  font-size: ${GV('font-size-5')};
  min-width: 140px;
  max-width: 140px;
  width: 100%;
  height: 44px;

  @media (max-width: 996px) {
    display: none;
  }
`;

export const MobileHeaderCustomButton = styled.div`
  color: var(--header);
  border-bottom: 2px solid var(--header);
  font-size: 16px;
  display: none;

  @media (max-width: 996px) {
    display: inline-block;
  }
`;

export const NavList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  color: #555c6c;
  border-top: 1px solid #dfe7fb;
  padding: 24px 32px 24px 48px;
  font-size: 15px;

  @media (max-width: 768px) {
    padding-left: 32px;
  }
`