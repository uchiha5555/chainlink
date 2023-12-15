import { Flex, Link, P } from "@/components/basic";
import Image from "@/components/basic/img";
import { Icon } from "@/components/custom";
import Logo from '@/assets/img/logo.png';
import { HeaderContainer, HeaderCustomButton, HeaderWrapper } from "./style";
import Navbar from "./elements/navbar";

const Header = () => {

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <Icon icon="Logo" width="120px" height="40px" />
                <Navbar />
                <HeaderCustomButton>Start building</HeaderCustomButton>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header;
