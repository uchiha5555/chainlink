import { Icon } from "@/components/custom";
import { HeaderContainer, HeaderCustomButton, HeaderWrapper, MobileHeaderCustomButton, NavItem, NavList } from "./style";
import Navbar from "./elements/navbar";
import { Drawer } from "antd";
import { useState } from "react";
import useScroll from "@/hooks/useScroll";

const Header = () => {
    const [visible, setVisible] = useState(false);
    const [, scrollY,] = useScroll();

    return (
        <HeaderContainer isTop={!(scrollY > 50)}>
            <HeaderWrapper>
                <Icon icon="Logo" width="auto" height="40px" />
                <Navbar />
                <HeaderCustomButton>Start building</HeaderCustomButton>
                <MobileHeaderCustomButton onClick={() => setVisible(!visible)}>Menu</MobileHeaderCustomButton>
            </HeaderWrapper>
            <Drawer open={visible} closable={false} placement="top" className="custom-drawer">
                <NavList>
                    <NavItem>Developers</NavItem>
                    <NavItem>Products</NavItem>
                    <NavItem>Use Cases</NavItem>
                    <NavItem>Ecosystem</NavItem>
                    <NavItem>Community</NavItem>
                    <NavItem>Resources</NavItem>
                    <NavItem>Economics</NavItem>
                </NavList>
            </Drawer>
        </HeaderContainer>
    )
}

export default Header;
