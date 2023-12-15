import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  background: var(--white);
  width: 100%;
  height: 100%;
  max-height: 88px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 124px;
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
  max-width: 140px;
  width: 100%;
  height: 44px;
`