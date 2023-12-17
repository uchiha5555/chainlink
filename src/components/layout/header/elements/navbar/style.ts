import styled from "styled-components";

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    padding: 0 1rem;
    max-width: 900px;
    width: 100%;
    height: 100%;

    @media (max-width: 996px) {
        display: none;
    }
`;

export const NavItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 12px;
    font-size: 15px;
    color: #3d4556;
    font-weight: 400;
    white-space: nowrap;
`