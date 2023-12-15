import React, { useEffect } from "react";

import { HomeContainer } from "./style";
import Hero from "./elements/hero";


const HomePage = () => {
    useEffect(() => {
    }, [])
    return (
        <HomeContainer>
            <Hero />
        </HomeContainer>
    )
}

export default HomePage;
